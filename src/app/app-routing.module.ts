import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AngularLoopingComponent } from './angular-looping/angular-looping.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { PipesComponent } from './pipes/pipes.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    {path: 'component-interaction', component:ComponentInteractionComponent},
    {path: 'angular-looping', component: AngularLoopingComponent},
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'decorator', component:DecoratorComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'two-way-binding', component: TwoWayBindingComponent},
    {path: 'app', component: AppComponent},
    {path: '', redirectTo: '/angular-looping', pathMatch: 'full'},
    {path: '**', redirectTo: '/angular-looping', pathMatch: 'full'},


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}