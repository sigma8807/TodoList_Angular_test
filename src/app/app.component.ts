import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  getDate() {
    return (new Date());
  }
  //constructor(private todoListService: TodoListService) {
  //}

}
