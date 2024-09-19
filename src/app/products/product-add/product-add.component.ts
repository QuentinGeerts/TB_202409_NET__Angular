import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDTO } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent implements OnInit {
  myForm!: FormGroup;
  product!: ProductDTO;

  constructor (
    private _fb: FormBuilder,
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit (): void {
    this.myForm = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(0), Validators.max(9999)]]
    });
  }

  onSubmit () {
    if (this.myForm.invalid) return;

    this.product = this.myForm.value;

    // this._productService.add(this.product)
    //   .subscribe({
    //     next: () => {},
    //     error: (err) => {},
    //     complete: () => {}
    //   })

    this._productService.add(this.product)
      .subscribe(() => this._router.navigateByUrl('products/list'));
  }

}
