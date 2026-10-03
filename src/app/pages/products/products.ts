import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';

@Component({

  imports: [ProductCard, FormsModule, Header],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  productos: Product[] = [];

  productosFiltrados: Product[] = [];

  filtro = '';

  categoriaSeleccionada = 'Todos';

  categorias = [
    'Todos',
    'Panes',
    'Pasteles',
    'Postres',
    'Tortas'
  ];

  constructor(
    private productService: ProductService
  ) {

    this.productos = this.productService.getProducts();

    this.productosFiltrados = [...this.productos];

  }

  filtrar(): void {

    this.productosFiltrados =
      this.productos.filter(producto => {

        const coincideNombre =
          producto.nombre
            .toLowerCase()
            .includes(this.filtro.toLowerCase());

        const coincideCategoria =
          this.categoriaSeleccionada === 'Todos'
          ||
          producto.categoria.toLowerCase()
          === this.categoriaSeleccionada.toLowerCase();

        return coincideNombre && coincideCategoria;

      });

  }

}
