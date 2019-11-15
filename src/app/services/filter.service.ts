import { Injectable } from '@angular/core';

import { Router, ActivatedRoute }      from '@angular/router';

import { DataClass as Data }           from 'classes/data';


type Filter     = {
  city_id:       number,
  category_ids:  number[],
  price_start:   number,
  price_end:     number,
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  data: Filter  = {
    city_id:       0,
    category_ids: [],
    price_start:   0,
    price_end:     300,
  };

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    ) { }

  get(data: Data[]): Data[] {
    console.log(this.data)
    let filtered_data = <Data[]>[];
    data.forEach( item => {
      if( this._isCity(item) 
          && this._isCategories(item)
          && this._isPrice(item) ) {
        filtered_data.push(item);
      }
    });
    this._setQuery(this.data)
    console.log(filtered_data);
    return filtered_data;
  }

  _setQuery(params: any): void {
    this.router.navigate([], {
      relativeTo:  this.route,
      queryParams: params,
      // queryParamsHandling: 'merge',
    })
  }

  setFromQuery(): void {
    this._setFromQuery('price_end');
    this._setFromQuery('price_start');
    this._setFromQuery('category_ids');
    this._setFromQuery('city_id');
  }

  _setFromQuery(name: string): void {
    const result = this.route.snapshot.queryParams[name];
    if(!result) return;
    if( Array.isArray(this.data[name]) )
      this.data[name] = Array.isArray(result) ? result.map( item => +item) : [+result];
    else
      this.data[name] = +result;
  }

  _isPrice(item: Data): boolean {
    return this.data.price_start <= item.price && this.data.price_end >= item.price;
  }

  _isCity(item: Data): boolean {
    return this.data.city_id ? this.data.city_id == item.city : true;
  }

  _isCategories(item: Data): boolean {
    if( this.data.category_ids.length <= 0 ) return true;
    if( !this.data.category_ids.some( value => !!value) ) return true;
    return this.data.category_ids.some( id => id == item.category );
  }

}
