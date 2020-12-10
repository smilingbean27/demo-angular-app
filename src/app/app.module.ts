import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultiplierPipe } from './pipes/multiplier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorComponent,
    DataBindingComponent,
    ComponentInteractionComponent,
    PipesComponent,
    MultiplierPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
