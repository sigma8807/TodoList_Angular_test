import { Component, OnInit, Input } from '@angular/core';
import { TodoItems } from '../todoItem'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent implements OnInit {
  
  @Input() items: TodoItems[];

  constructor() { }

  ngOnInit() {
  }

}
