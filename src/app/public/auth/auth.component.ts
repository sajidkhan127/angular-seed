import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthLayoutComponent extends Menu implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
