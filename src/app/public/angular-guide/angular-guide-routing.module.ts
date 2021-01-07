import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularGuideComponent } from './angular-guide.component';

const routes: Routes = [{ path: '', component: AngularGuideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularGuideRoutingModule { }
