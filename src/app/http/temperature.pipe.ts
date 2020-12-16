import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform{
    transform(temp: number, unit: string){
        if (temp){
            if (unit === 'K'){
                return (temp + 274.15).toFixed(2)+' K';
            }
            if (unit === 'C'){
                return (temp - 274.15).toFixed(2)+' C';
            }
            else return '';
        }
        else return '';
        
    }
}