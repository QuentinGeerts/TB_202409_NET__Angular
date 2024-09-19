import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  // productService: ProductService = inject(ProductService);
  constructor (private productsService: ProductService) { }

  ngOnInit (): void {
    this.productsService.get().subscribe({
      next: (value: Product[]) => {
        console.log("Récupération en cours....", value);
        this.products = value
      },
      error: (err: any) => console.error(err),
      complete: () => console.log("Récupération terminée.")
    });
  }



}
