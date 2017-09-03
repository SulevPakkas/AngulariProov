import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavComponent }  from './navigation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ NavComponent, AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
