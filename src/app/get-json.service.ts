import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItems } from './todoItem';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {
  //test: string = '123';
  //data: string[];
  sourceUrl = '/test';

  constructor(private http :HttpClient) { }

  getdata() {
    return this.http.get<TodoItems[]>(this.sourceUrl);
  }
}
