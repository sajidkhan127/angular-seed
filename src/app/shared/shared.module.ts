import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { RouterModule } from '@angular/router';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

const HEADER_COMPONENTS = [
  NavbarComponent,
  LogoComponent,
  MenuListComponent,
  MenuListItemComponent,
];

@NgModule({
  declarations: [
    ...HEADER_COMPONENTS,
    ModalContainerComponent,
    CardContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...SHARED_ZORRO_MODULES,
  ],
  exports: [
    ...HEADER_COMPONENTS,
    ...SHARED_ZORRO_MODULES,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CardContainerComponent,
  ],
})
export class SharedModule {}
