import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {path: 'to-do-items', component: ToDoItemsComponent},
  {path: 'add-form', component: AddFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
