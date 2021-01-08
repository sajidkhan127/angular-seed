import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./public/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'guide',
    loadChildren: () =>
      import('./public/angular-guide/angular-guide.module').then(
        (m) => m.AngularGuideModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./public/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./public/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
