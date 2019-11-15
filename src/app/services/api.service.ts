import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

import { CategoryClass as Category }   from 'classes/category';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
    // this.get().subscribe(data => {console.log(data); });
  }

  public categories(): Observable<any> {
    return this.http.get("./assets/mocks/api/category.json")
  }
  public cities(): Observable<any> {
    return this.http.get("./assets/mocks/api/city.json")
  }
  public data(): Observable<any> {
    return this.http.get("./assets/mocks/api/data.json")
  }

}
