import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent extends Menu implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
