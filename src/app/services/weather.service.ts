import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {api_key} from './api_key';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private suffixURL = '&appid='+ api_key;

  constructor(private http: HttpClient) {

   }
  
  getWeather(city: string): Observable<any>{
    return this.http.get(this.baseURL + city + this.suffixURL)
      .pipe(catchError(err => {
          if (err.status === 404){
            console.log(`City ${city} not found.`)
          }else{
            console.log('Unknown Error!!');
          }
          return throwError(err.status);
        
      }))
  }
}
