import { Component, OnInit } from '@angular/core';
import { Day } from '../models/day';
import { WeatherService } from "../weather.service";
import { ForecastResponse } from "../models/forecast.response";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  // temperatureInput: number;
  // windSpeedInput: number;
  // forcast: any;

  days: Day[] = [];
  loc: string;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
    this.route.params.subscribe((value) => {
      console.info(value);
      this.loc = value.city;
      this.updateLocation();
    })
  }

  async fetchForcast(): Promise<void> {
    try {
      const answer: ForecastResponse = await this.weatherService.getCurrentWeather(this.loc);
      console.info(answer);
      this.days = answer.list.map(day => ({
        date: new Date (day.dt_txt),
        temperature: day.main.temp,
        description: day.weather[0].description,
        humidity: day.main.humidity,
        windSpeed: day.wind.speed
      })).filter((item, i) => i % 8 === 0);
      console.log(this.days);
    } catch {
      alert('error');
    }
  
  }

  updateLocation(): void {
    console.info(this.loc);
    this.fetchForcast();
    // const newDay: Day = {
    //   date: new Date(this.dateInput),
    //   temperature: this.temperatureInput,
    //   windSpeed: this.windSpeedInput
    // };
    // this.days.push(newDay);
  }

  removeDay(day: Day): void {
    this.days.splice(this.days.indexOf(day), 1);
  }


  ngOnInit(): void {
  }

}
