import { Component, Inject, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductComponent} from './../../components/product/product.component'
import { Product } from './../../components/models/product.model';
@Component({
  standalone: true,
  imports: [ ProductComponent ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
     .subscribe((data) => {
      this.products = data;
  
     })
  }
}
