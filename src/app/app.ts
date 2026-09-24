import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Featuredproducts } from './components/featuredproducts/featuredproducts';
import { Categories } from './components/categories/categories';
import { About } from './components/about/about';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Featuredproducts, Categories, Footer, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
