import { Component } from '@angular/core';
import { ProductInputService } from './product-input.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss']
})
export class ProductInputComponent {
  product: Product = new Product();

  constructor(private productService: ProductInputService) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('quantity', this.product.quantity.toString());
    formData.append('price', this.product.price.toString());
    if (this.product.image) {
      formData.append('Image', this.product.image);
    }

    this.productService.createProduct(formData).subscribe(
      response => {
        console.log('Product submitted successfully');
        // Reset the form or perform any other actions after successful submission
      },
      error => {
        console.log('Error submitting product:', error);
        // Handle error scenarios
      }
    );
  }
  

  onImageChange(event: any) {
    const file = event.target.files[0];
    this.product.image = file;
  }
}

