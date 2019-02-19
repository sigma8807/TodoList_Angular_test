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
  //
  // 所有的HttpClient方法都返回一個Observable的物件。
  // 一般來說，Observable物件會傳送多次資料給接收者，但http.get所取得的值為例外，
  // 因為http方法是發出要求並收到回應後就不會再有動作，因此它只會傳一次資料給取得這個資料的接收者。並且需要在被subscribe()後才會啟動動作
  // http.get預設接收的格式為json，會自動對照所取得的json轉化成一個對應屬性的物件以方便取得資料。
  //
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
