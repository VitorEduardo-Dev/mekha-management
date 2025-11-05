import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/mekhalogin',
    pathMatch: 'full'
  },
  {
    path: 'mekhalogin',
    component: LoginComponent,
    title: 'Login'
  }
];
