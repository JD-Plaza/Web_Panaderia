import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Categories } from '../../components/categories/categories';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { About } from '../../components/about/about';
import { Footer } from '../../components/footer/footer';
@Component({
  imports: [Header, Hero, Categories, FeaturedProducts, About, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home { }
