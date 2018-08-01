import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from './news.interface';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url: string = "api/News/";
  constructor(
    private http:HttpClient
  ) { }

  GetAll():Observable<INews[]>{
    return this.http.get<INews[]>(this.url);
  }

  Get(id:Number): Observable<INews[]> {
    return this.http.get<INews[]>(this.url + id);
  }

  Create(news: INews):Observable<INews>{
    return this.http.post<INews>("", news);
  }

}
