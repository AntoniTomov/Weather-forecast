import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Pesho',
    age: 18,
    img: 'https://wallpaperaccess.com/full/2213426.jpg',
    isLoggedIn: true,
  };
  constructor() { }

  ngOnInit(): void {
  }


}
