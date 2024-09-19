import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoSubjectComponent } from './demo-subject/demo-subject.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'subject', component: DemoSubjectComponent},

  { path: 'products',  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
