import { Injectable } from '@angular/core';
import { TodoItems } from './todoItem';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';  // 加入http類別


@Injectable({providedIn: 'root'})

// 注意到我們用@Injectable()來宣告TodoListService這個類別，代表這個類別可能本身有依賴注入，對Service來說是強烈建議要加上這個宣告
export class TodoListService {
  sourceUrl_post = '/adds';   // 設定要讀的api的位置
  sourceUrl_delete = '/del';
  sourceUrl_check = '/chk';


  // headers就是宣告傳去的格式
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  // 新增資料
  addTodo(text: string) {
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
    // 在RxJS中，有兩個角色，Observable和Subscription，Observable負責產生資料，創建後不會馬上啟動，
    // 而在關注(subscribe)後開始啟動。
    }
  }
