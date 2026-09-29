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
        descripcion: 'Chocolate intenso con frutos rojos.',
        precio: 4,
        imagen: 'https://images.unsplash.com/photo-57898554506-6998bd9587',
        categoria: 'Pasteles'
      },

      {
        id: 2,
        nombre: 'Croissant de Mantequilla',
        descripcion: 'Masa hojaldrada artesanal.',
        precio: 4,
        imagen: 'https://images.unsplash.com/photo-555507036-abf4038808a',
        categoria: 'Panes'
      },

      {
        id: 3,
        nombre: 'Pack de Donas',
        descripcion: 'Caja de donas artesanales.',
        precio: 4,
        imagen: 'https://images.unsplash.com/photo-550460-bec78aea704b',
        categoria: 'Postres'
      },

      {
        id: 4,
        nombre: 'Cheesecake New York',
        descripcion: 'Cheesecake clásico.',
        precio: 8,
        imagen: 'https://images.unsplash.com/photo-533344443-d4fd5305ad',
        categoria: 'Pasteles'
      },

      {
        id: 5,
        nombre: 'Torta de Cumpleaños',
        descripcion: 'Torta especial para celebraciones.',
        precio: 40,
        imagen: 'https://images.unsplash.com/photo-46434909543-e9a85b5f3',
        categoria: 'Tortas'
      }

    ];

  }

}
