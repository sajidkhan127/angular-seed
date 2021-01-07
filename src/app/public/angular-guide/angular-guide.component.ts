import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-guide',
  templateUrl: './angular-guide.component.html',
  styleUrls: ['./angular-guide.component.scss']
})
export class AngularGuideComponent implements OnInit {
  title = 'angular-seed';
  constructor() { }

  ngOnInit(): void {
  }

}
