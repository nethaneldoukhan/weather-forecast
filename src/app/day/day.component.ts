import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from '../models/day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  weatherImg: string = "https://material.angular.io/assets/img/examples/shiba1.jpg";
  options: any = {day: "numeric", month: "numeric", year: "numeric"};

  @Input() day: Day;
  @Output() dayRemove = new EventEmitter();

  emitDayRemoved() {
    this.dayRemove.emit(this.day);
  }


  constructor() {  }

    ngOnInit(): void {
  }


}
