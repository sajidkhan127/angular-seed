import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  menuItems = [
    { title: 'Home', routerLink: '/' },
    { title: 'About', routerLink: '/about' },
    { title: 'Angular Guide', routerLink: '/guide' },
    { title: 'login', routerLink: '/login' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
