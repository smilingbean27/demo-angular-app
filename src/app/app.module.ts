import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultiplierPipe } from './multiplier.pipe';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AngularLoopingComponent } from './angular-looping/angular-looping.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorComponent,
    DataBindingComponent,
    ComponentInteractionComponent,
    PipesComponent,
    MultiplierPipe,
    TwoWayBindingComponent,
    AngularLoopingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
