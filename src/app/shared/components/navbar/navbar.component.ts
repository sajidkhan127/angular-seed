import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() templateContent!: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
