import { Injectable } from '@angular/core';
import { TodoItems } from './todoItem';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({providedIn: 'root'})
export class TodoListService {
  sourceUrl_get = '/test';
  sourceUrl_post = '/adds';

  constructor(private http: HttpClient) { }

  todoItems = this.http.get<TodoItems[]>(this.sourceUrl_get).subscribe(Data => this.todoItems = Data);


  getTodoList() {
    return this.todoItems;
  }

  // 新增資料
  addTodo(text) {
    console.log('123', text);
    console.log(`456 ${text}`);
    this.http.post<TodoItems>(this.sourceUrl_post, {id: 8, value: text, done: false});
  }

  // 刪除資料
  deleteItem(item: TodoItems) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  // 完成
  toogleItemStatus(item: TodoItems) {
    item.done = !item.done;
  }

}
