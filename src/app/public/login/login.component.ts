import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  menuItems = [
    { title: 'Home', routerLink: '/' },
    { title: 'About', routerLink: '/about' },
    { title: 'Angular Guide', routerLink: '/guide' },
    { title: 'login', routerLink: '/login' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
