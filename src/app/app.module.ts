import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   exports: [AppComponent]
})
export class AppModule { }
