import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';


// @Component則是用來定義這一個元件的相關資訊，有三個metadata

@Component({
  selector: 'app-add-form',  // the components CSS element selector以及在HTML裡要宣告的TAG名稱
  templateUrl: './add-form.component.html', // 要使用的HTML樣版位置
  styleUrls: ['./add-form.component.scss']  // 專為這個元件設定的CSS
})

// 我們通常會使用export class，以方便在其他的模組裡可以import來使用

export class AddFormComponent implements OnInit {

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.todoListService.addTodo(this.todoText);
  }
}
