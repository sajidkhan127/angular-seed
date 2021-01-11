import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./public/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
