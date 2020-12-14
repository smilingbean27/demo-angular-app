import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultiplierPipe } from './multiplier.pipe';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AngularLoopingComponent } from './angular-looping/angular-looping.component';
import { UserService } from './user.service';
import { ParentComponent } from './parent/parent.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    DecoratorComponent,
    DataBindingComponent,
    ComponentInteractionComponent,
    PipesComponent,
    MultiplierPipe,
    TwoWayBindingComponent,
    AngularLoopingComponent,
    ParentComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
