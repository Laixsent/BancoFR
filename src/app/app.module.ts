// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule aquí
    HttpClientModule // Agrega HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
