import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from "./add-form/add-form.component";
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { TodoListService } from './todo-list.service';
import { GetJsonComponent } from './get-json/get-json.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ToDoItemsComponent,
    GetJsonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
