// 透過下列CLI的指令來新增一個Routing
// ng generate module app-routing --flat --module=app
// --flat 的意思是將產出文件放在src/app裡，而非自己一個資料夾
// --module=app 則是告知CLI註冊這個Routing在AppModule的imports裡



import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {path: 'to-do-items', component: ToDoItemsComponent}, // http://localhost/to-do-items時，會在標籤內顯示ToDoItemsComponent這元件的內容
  {path: 'add-form', component: AddFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 設定完Router的map後，將之設定進RouterModule.forRoot()裡然後再將這整個Router功能設定為可以被export，之後便可以在app.module裡import這個Router
