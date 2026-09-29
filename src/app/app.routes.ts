import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { About } from './components/about/about';
import { Contact } from './pages/contact/contact';
import { CartComponent } from './pages/cart/cart';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'productos',
    component: Products
  },
  {
    path: 'nosotros',
    component: About
  },
  {
    path: 'contacto',
    component: Contact
  },
  {
    path: 'carrito',
    component: CartComponent
  }
];
