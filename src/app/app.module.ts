import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   exports: [AppComponent]
})
export class AppModule { }
