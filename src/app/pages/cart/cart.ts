import { Component, OnInit, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartItem } from '../../models/cart.item.model';
import { CartService } from '../../services/cart.service';
@Component({
  imports: [RouterLink],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class CartComponent implements OnInit {


  items: CartItem[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.items = this.cartService.getItems();

  }

  removeItem(productId: number): void {

    this.cartService.removeProduct(productId);

    this.items =
      this.cartService.getItems();

  }


  clearCart(): void {

    this.cartService.clearCart();

    this.items = [];

  }

}
