import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compileInjector } from '@angular/compiler';
import { NgOptimizedImage } from '@angular/common';
import {Product} from './components/models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'replicacionuno';
  http = inject(HttpClient);
  products: Product[] = [];

changeTitle(){
this.title = 'changed';
}
ngOnInit(){
  this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
   .subscribe((data) => {
    this.products = data;

   })
}
}