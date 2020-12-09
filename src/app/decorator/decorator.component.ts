import { Component } from '@angular/core';

//Decorators - Special type of functions which enhance/configure the members (class, methods, properties, parameters) that follow

function myMethodDecorator(target: object, name: string, descriptor: TypedPropertyDescriptor<any>){
  console.log('Yeah! My special function is running.');
  return descriptor;
}

function myClassDecorator(constructor: Function){
  console.log("target: ", constructor);
  console.log("name:", name);
}

function myPropertyDecorator(target: object, key: string){
  console.log("Inside property decorator: Target", target);
  console.log("Name of Property: ", key);
}

//Class type Decorator - Immediately followed by class
@myClassDecorator
class myClass{
  constructor(){
    console.log('......Inside class constructor');
  }
}

//Component Decorator (Class type) - Inbuilt in Angular
@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})

export class DecoratorComponent {
// Method type Decorator - Immediately followed by method part of class
  @myMethodDecorator
  myIndependentFunction() {
  console.log('Um...I am powerful on own, but do I need some extra powers?');
  }

// Property type Decorator - Immediately followed by property inside a class
  @myPropertyDecorator 
  isProperty: boolean = false;

}








