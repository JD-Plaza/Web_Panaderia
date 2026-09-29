import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  imports: [ProductCard, RouterLink],
  styleUrl: './featured-products.css',
  templateUrl: './featured-products.html',
})
export class FeaturedProducts {

  productos: Product[] = [];

  constructor(
    private productService: ProductService
  ) {

    this.productos =
      this.productService.getProducts().slice(0, 3);

  }

}
