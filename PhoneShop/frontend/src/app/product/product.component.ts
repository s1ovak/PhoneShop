import { Component, OnInit } from '@angular/core';
import {ProductService} from "../util/service/product.service";
import {Product} from "../util/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public numbers: number[] = [];
  public selected: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const id = window.location.href.split('id=').pop();
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      this.numbers = Array.from(Array(this.product.quantity), (x, index) => index + 1);
      this.selected = this.numbers[0].toString();
    })
  }

  addToCart(): void {

  }


}
