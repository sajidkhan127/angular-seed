import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { RouterModule } from '@angular/router';

const HEADER_COMPONENTS = [
  NavbarComponent,
  LogoComponent,
  MenuListComponent,
  MenuListItemComponent,
];

@NgModule({
  declarations: [...HEADER_COMPONENTS],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [...HEADER_COMPONENTS, RouterModule],
})
export class SharedModule {}
