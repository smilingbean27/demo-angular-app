import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import SearchBar from './search-bar/search-bar.component';
import { DecoratorComponent } from './decorator/decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
