import { Routes } from '@angular/router';
import { Carrito } from './components/carrito/carrito';
import { About } from './components/about/about';
import { Categories } from './components/categories/categories';


export const routes: Routes = [
  { path: 'categories', component: Categories },
  { path: 'carrito', component: Carrito },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];
