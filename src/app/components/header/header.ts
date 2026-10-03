import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})

export class Header implements OnInit {

  totalItems = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.actualizarContador();

  }

  actualizarContador(): void {

    this.totalItems =
      this.cartService.getTotalItems();

  }

}
