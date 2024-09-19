import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../guards/is-authenticated.guard';
import { productResolver } from '../resolvers/product.resolver';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      { path: 'list', component: ProductsListComponent },
      { path: 'add', component: ProductAddComponent, canActivate: [isAuthenticatedGuard] },
      { path: ':id', component: ProductDetailsComponent, resolve: { product: productResolver } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
