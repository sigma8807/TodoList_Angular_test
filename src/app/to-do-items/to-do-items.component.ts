import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { TodoItems } from '../todoItem';
import { TodoListService } from '../todo-list.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})

export class ToDoItemsComponent implements OnInit {
  constructor(private todoListService: TodoListService,  // 宣告注入的service
              private http: HttpClient) { }
  sourceUrl_get = '/test';
  // todoItems = this.todoItems = this.http.get<TodoItems[]>(this.sourceUrl_get).subscribe(Data => this.todoItems = Data);
  todoItems = this.http.get<TodoItems[]>(this.sourceUrl_get).subscribe(Data => this.todoItems = Data);
  ngOnInit() {
    // ngOnInit會在初始化元件時被呼叫
  }

  getTodoList() {
    console.log(this.todoItems);
    // Array.prototype.slice.call(obj 資料) ----> 將obj轉乘array,html才能用for迭代
    return (Array.prototype.slice.call(this.todoItems));
  }

  itemClick(item: TodoItems) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItems) {
    this.todoListService.deleteItem(item);
    this.todoItems = this.http.get<TodoItems[]>(this.sourceUrl_get).subscribe(Data => this.todoItems = Data);
    this.getTodoList();
  }

}
