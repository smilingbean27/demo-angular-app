import { Pipe, PipeTransform } from "@angular/core";

// Custom Pipe - MuliplierPipe
// Make sure to declare the pipe in ngModule 
// Input --       value
// Transformer -- multiple
// Ouput --       return value

@Pipe({name: 'multiplier'})
export class MultiplierPipe implements PipeTransform {
    transform(value: number, multiple: number){
        return value * multiple;
    }
}
