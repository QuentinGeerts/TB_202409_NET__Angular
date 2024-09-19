import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Product | null> = (route, state) => {
  
  console.log('route :>> ', route);
  console.log('route.params.get("id") :>> ', route.paramMap.get("id"));
  console.log('route.params.get("id") :>> ', route.params["id"]);

  const productId = route.paramMap.get('id');

  return productId ? inject(ProductService).getById(productId) : null;

};
