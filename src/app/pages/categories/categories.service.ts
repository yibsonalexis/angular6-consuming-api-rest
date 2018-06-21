import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ICategories } from './categories.interface';
import { AppSettings } from '../../app.settings';
// import { urlAPI } from '../../app.module';
// import { urlAPI } from 'src/app/app.module';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';  
// import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private urlAPIa: string = AppSettings.urlAPI;
  private url: string = "api/categories";
  constructor(private http: HttpClient) {
  }

  Get(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.url);
  }

  create(categories: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(this.url, categories);
  }


}
