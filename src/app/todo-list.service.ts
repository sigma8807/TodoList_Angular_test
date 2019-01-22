import { Injectable } from '@angular/core';
import { TodoItems } from './todoItem';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class TodoListService {
  sourceUrl_post = '/adds';
  sourceUrl_delete = '/del';
  sourceUrl_check = '/chk';

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  // 新增資料
  addTodo(text: string) {
    // console.log('123', text);
    console.log(`text: ${text}`);
    this.http.post<TodoItems>(
      this.sourceUrl_post, {id: Date.now(), value: text, done: false}, {headers: this.headers})
      .subscribe(res => console.log(res)); // Server 回傳的值
    }


  // 刪除資料
  deleteItem(item: TodoItems) {
    console.log(item.value);
    this.http.post<TodoItems>(
      this.sourceUrl_delete, {id: item.id, value: item.value, done: item.done}, {headers: this.headers})
      .subscribe(res => console.log(res));
    // this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  // 完成
  toogleItemStatus(item: TodoItems) {
    item.done = !item.done;
    console.log(item);
    this.http.post<TodoItems>(
      this.sourceUrl_check, {id: item.id, value: item.value, done: item.done}, {headers: this.headers})
      .subscribe(res => console.log(res));
    }
  }
