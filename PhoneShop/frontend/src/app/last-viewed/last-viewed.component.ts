import {Component, OnInit} from '@angular/core';
import {ProductService} from "../util/service/product.service";
import {GlobalUserStorageService} from "../util/service/global-storage.service";
import {Product} from "../util/models/product.model";

@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.css']
})
export class LastViewedComponent implements OnInit {

  products: Product[];


  constructor(
    private productService: ProductService,
    private localStorageService: GlobalUserStorageService
  ) {}

  ngOnInit() {
      const productsIds = this.localStorageService.lastViewedProducts;
      if (productsIds) {
        this.productService.getLastViewedProducts(productsIds).subscribe( (data) =>{
          this.products = data;
        })
      }
  }

}
