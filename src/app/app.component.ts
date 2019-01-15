import { Component } from '@angular/core';
import { TodoItems } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';

  todoItems: TodoItems[] =[{
      id: 1,
      value: 'Todo Item No.1',
      done: false
    },{
      id: 2,
      value: 'Todo Item No.2',
      done: true
    },{
      id: 3,
      value: 'Todo Item No.3',
      done: false
    }];

  getDate() {
    return(new Date());
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

}
