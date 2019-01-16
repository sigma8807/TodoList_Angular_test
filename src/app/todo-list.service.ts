import { Injectable } from '@angular/core';
import { TodoItems } from './todoItem'

@Injectable({providedIn: 'root'})
export class TodoListService {
  todoItems: TodoItems[] = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: false
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];
  constructor() { }

  getTodoList() {
    return this.todoItems;
  }

  //新增資料
  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  //刪除資料
  deleteItem(item: TodoItems) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  //完成
  toogleItemStatus(item: TodoItems) {
    item.done = !item.done;
  }

}
