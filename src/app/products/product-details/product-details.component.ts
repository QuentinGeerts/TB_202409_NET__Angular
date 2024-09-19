import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  product!: Product;

  ngOnInit (): void {
    console.log('this.route :>> ', this.route);
    this.product = this.route.snapshot.data['product'];
  }



}
