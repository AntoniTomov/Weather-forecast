import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  constructor() { }
  @Input() country;
  ngOnInit(): void {
  }
  getCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

}
