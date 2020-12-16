import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  searchInput = new FormControl('');
  humidity: number = 0 ;
  temperature: number = 0;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(debounceTime(500),
      switchMap(city => this.weatherService.getWeather(city)))
     .subscribe(
       res => {
         this.temperature = res.main.temp;
         this.humidity = res.main.humidity;
         console.log(res);
         
       },
       err => {
         console.log('Cannot get the weather for some reason');
       }
     )
  }

}
