import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ToDoItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [TodoListService], // 給appModule使用,若要使用CLI來自動完成providers的設定，則可以用下面的指令:ng generate service hero --module=app

  bootstrap: [AppComponent]
})
export class AppModule { }
