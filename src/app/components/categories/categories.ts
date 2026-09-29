import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {

  categorias = [
    {
      nombre: 'Panes',
      descripcion: 'Recién horneados',
      icono: '🍞'
    },
    {
      nombre: 'Pasteles',
      descripcion: 'Dulzura pura',
      icono: '🎂'
    },
    {
      nombre: 'Postres',
      descripcion: 'Delicias dulces',
      icono: '🍪'
    },
    {
      nombre: 'Tortas',
      descripcion: 'Para celebrar',
      icono: '🎉'
    }
  ];

}
