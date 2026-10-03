import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

  @Input() product!: Product;

  showMessage = false;

  constructor(
    private cartService: CartService,
    private router: Router // Inyección de Router corregida
  ) { }

  addToCart(): void {
    this.cartService.addProduct(this.product);

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

  viewProduct(): void {
    this.router.navigate([
      '/productos',
      this.product.id
    ]);
  }

}
