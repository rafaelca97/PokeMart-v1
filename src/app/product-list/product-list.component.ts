import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  ngOnInit() {
    // Simular obtención de datos de una base de datos
    this.products = [
      { id: 1, name: 'Pokeball', price: 200, image: 'assets/images/Pokeball.png', stock: 50 },
      { id: 2, name: 'Superball', price: 600, image: 'assets/images/superball.png', stock: 30 },
      { id: 3, name: 'Ultraball', price: 1200, image: 'assets/images/ultraball.png', stock: 20 },
      { id: 4, name: 'Turnoball', price: 10000, image: 'assets/images/turnoball.png', stock: 5 },
      { id: 5, name: 'Masteball', price: 10000, image: 'assets/images/turnoball.png', stock: 6 },
      { id: 6, name: 'Cuerda Huida', price: 10000, image: 'assets/images/turnoball.png', stock: 7 },
      { id: 7, name: 'Polla en vinagre', price: 10000, image: 'assets/images/turnoball.png', stock: 8 },
      { id: 8, name: 'Polla en vinagre', price: 10000, image: 'assets/images/turnoball.png', stock: 8 },


    ];
  }

  getProductById(id: number): Product {
    // Retorna un producto por ID, o un valor por defecto si no se encuentra
    return this.products.find(product => product.id === id) || {
      id: -1,  // Valor que indiques para productos no encontrados
      name: 'UNKNOWN',
      price: 0,
      image: 'assets/images/placeholder.png',  // Imagen de reemplazo
      stock: 0
    };
  }
}
