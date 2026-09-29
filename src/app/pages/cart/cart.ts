import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.item.model';
import { CartService } from '../../services/cart.service';
@Component({
  imports: [],
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
}
