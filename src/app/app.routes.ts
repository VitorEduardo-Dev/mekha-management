import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';
import { InputOutputProductsComponent } from './pages/input-output-products-component/input-output-products-component';

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
  },

  {
    path: 'spin-products',
    component: InputOutputProductsComponent,
    title: 'Entrada e Saida de produtos'
  }
];
