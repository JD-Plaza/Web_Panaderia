import { Component } from '@angular/core';
import { LucideAngularModule, Croissant, Cake, IceCreamBowl, CakeSlice } from 'lucide-angular';

@Component({
  selector: 'app-categories',
  imports: [LucideAngularModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  categorias = [
    {
      nombre: 'Panes',
      descripcion: 'Recién horneados',
      icono: Croissant,
    },
    {
      nombre: 'Pasteles',
      descripcion: 'Dulzura pura',
      icono: Cake,
    },
    {
      nombre: 'Postres',
      descripcion: 'Delicias dulces',
      icono: IceCreamBowl,
    },
    {
      nombre: 'Tortas',
      descripcion: 'Para celebrar',
      icono: CakeSlice,
    },
  ];
}
