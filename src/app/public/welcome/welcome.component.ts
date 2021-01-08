import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  menuItems = [
    { title: 'Home', routerLink: '/' },
    { title: 'About', routerLink: '/about' },
    { title: 'Angular Guide', routerLink: '/guide' },
    { title: 'login', routerLink: '/login' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
