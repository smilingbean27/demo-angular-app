import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultiplierPipe } from './multiplier.pipe';
import { TemperaturePipe } from './http/temperature.pipe';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AngularLoopingComponent } from './angular-looping/angular-looping.component';

import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';
import { WeatherService } from './services/weather.service';
import { ParentComponent } from './parent/parent.component';
import { FormsComponent } from './forms/forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpComponent } from './http/http.component';



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
    FormsComponent,
    DynamicFormComponent,
    HttpComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [UserService, QuestionService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
