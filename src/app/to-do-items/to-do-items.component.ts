import { Component, OnInit } from '@angular/core';
import { TodoItems } from '../todoItem';
import { TodoListService } from '../todo-list.service';


@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})

export class ToDoItemsComponent implements OnInit {
  constructor(private todoListService : TodoListService) { }
  ngOnInit() {
  }
  getTodoList(){
    return this.todoListService.getTodoList();
  }
  
  itemClick(item: TodoItems) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItems) {
    this.todoListService.deleteItem(item);
  }

}
