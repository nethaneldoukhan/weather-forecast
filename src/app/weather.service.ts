import { Injectable } from '@angular/core';
import { ForecastResponse } from './models/forecast.response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

   async getCurrentWeather(loc): Promise<ForecastResponse> {

      const data: Response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=b2af191bb679ff73acfe40453bbc31cd&units=metric`);
      return data.json();
      }
    }
    
