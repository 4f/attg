import { Component, OnInit }           from '@angular/core';
import { Observable, of }              from 'rxjs';

import { Options }                     from 'ng5-slider';


import { CategoryClass as Category }   from 'classes/category';
import { CityClass as City }           from 'classes/city';
import { DataClass as Data }           from 'classes/data';

import { ApiService }                  from 'services/api.service';
import { FilterService }               from 'services/filter.service';


type IdsWith<T> = { [K in number]: T };


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:          Category[];
  norm_categories:     IdsWith<Category>;
  cities:              City[];
  norm_cities:         IdsWith<City>;
  data:                Data[];
  filtered_data:       Data[]     = [];


  options: Options = {
    floor: 0,
    ceil:  300,
  };

  constructor(
    private API:    ApiService,
    private filter: FilterService,
  ) { }

  ngOnInit(){
    this.filter.setFromQuery();
    this.setCategories();
    this.setCities();
    this.setData();
  }

  setCategories(): void {
    // this.CS.getCategories().subscribe(cats => this.categories = cats)
    this.API.categories().subscribe(
      data => { 
        console.log(data);
        this.categories = <Category[]>data;
        this.norm_categories = this._normalizeById(this.categories);
        this.filter.data.category_ids.forEach( id => this.norm_categories[id].__selected = true);
      }
    );
  }

  setCities(): void {
    this.API.cities().subscribe(
      data => { 
        this.cities = <City[]>data;
        this.norm_cities = this._normalizeById(this.cities);
      }
    );
  }

  setData(): void {
    this.API.data().subscribe(
      data => { 
        console.log(data);
        this.data = <Data[]>data;
        this.filtered_data = this.data;
        this.calculateSizeCaterories();
        this.doFilter();
      }
    );
  }


  submit(e): boolean {
    this.doFilter();
    e.preventDefault();
    return false;
  }

  getCategoryById(id: number): Category {
    return this.categories.find( (category: Category) => id === category.id );
  }

  getCityById(id: number): City {
    return this.cities.find( (city: City) => id === city.id );
  }

  calculateSizeCaterories(): void {
    this.categories.forEach( (category: Category) => category.__size = 0 );
    this.data.forEach( (item: Data) => {
      let category = this.norm_categories[item.category];
      if(!category) return;
      category.__size = category.__size + 1;
    })
  }

  doFilter(): void {
    this.filtered_data = this.filter.get(this.data);
  }

  changeCategory(event_or_bool, id): void {
    const result = (typeof event == 'boolean') ? event_or_bool : event_or_bool.target.checked;
    this.norm_categories[id].__selected = result;
    if(result)
      this.filter.data.category_ids.push(id);
    else
      this.filter.data.category_ids = this.filter.data.category_ids.filter( (category_id: number) => category_id != id );
  }

  changeCity(id): void {
    this.filter.data.city_id = +id;
  }

  _normalizeById(array: any): any {
    let result = {};
    if(array)
      array.forEach( item => result[item.id] = item );
    return result;
  }


}
