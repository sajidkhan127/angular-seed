import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularGuideRoutingModule } from './angular-guide-routing.module';
import { AngularGuideComponent } from './angular-guide.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [AngularGuideComponent],
  imports: [
    CommonModule,
    AngularGuideRoutingModule,
    SharedModule
  ]
})
export class AngularGuideModule { }
