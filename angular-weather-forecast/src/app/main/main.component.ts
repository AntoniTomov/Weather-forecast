import { Component, OnInit } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  }
  allCountries = [];
  ngOnInit(): void {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => this.allCountries = [...res])
      .catch(err => console.log(err))
  }

}
