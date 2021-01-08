import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() template!: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {}
}
