import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  
  citys: string[] = this.getToLS();
  getCity: string;

  getToLS(): string[] {
    var citysJSON: string = localStorage.getItem("citys");
    var citysArray: string[] = [];

    if (citysJSON == null) {
        // city = 0;
    } else {
      citysArray = JSON.parse(citysJSON);
    }

    return citysArray;
  }


  removeCity(i: number): void {
    this.citys.splice(i, 1);
    this.saveToLS(this.citys);
  }

  addCity(): void {
    if (this.getCity != '') {
      this.citys.push(this.getCity);
      this.getCity = '';
      this.saveToLS(this.citys);
    } else {
      alert('Empty');
    }
  }

  defaultCity(i: number): void {
    const city: string = this.citys[i];
    this.citys.splice(i, 1);
    this.citys.unshift(city);
    this.saveToLS(this.citys);
  }

  saveToLS(citys: object): void {
    var citysJSON: string = JSON.stringify(citys);
    localStorage.setItem("citys", citysJSON);
}

  ngOnInit(): void { }

}
