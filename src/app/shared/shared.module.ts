import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';

const HEADER_COMPONENTS = [
  NavbarComponent, LogoComponent
]

@NgModule({
  declarations: [...HEADER_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...HEADER_COMPONENTS]
})
export class SharedModule { }
