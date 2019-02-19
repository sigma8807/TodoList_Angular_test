import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';

// 在angular裡會有許多＠開頭的宣告，這樣的宣告稱為decorator，可以在元件或模組裡設定許多metadata
// 在ngModule裡最重要的屬性有下面這五點：

// declarations：屬於這個模組的成員。Angular有三種成員：components, directives,以及pipes。
// exports：要將declarations宣告的那一些成員公開。讓其他模組引用此模組時，可以存取該成員的public function。
// imports：需引用的模組，所有在這個模組內的元件要引用的模組都要在此宣告
// providers：要引用的Service需在此宣告
// bootstrap：這個屬性只有根模組需要設定，在此設定在一開始要顯示的application view


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
