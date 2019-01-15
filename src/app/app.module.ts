import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ToDoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
