import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProducts(): Product[] {
    return [
      {
        id: 1,
        nombre: 'Tarta de Chocolate',
        precio: 25000,
        descripcion: 'Tarta artesanal',
        imagen: '',
        categoria: 'Pasteles'
      },
      {
        id: 2,
        nombre: 'Croissant',
        precio: 5000,
        descripcion: 'Croissant clásico',
        imagen: '',
        categoria: 'Panes'
      }

    ];
  }
}
