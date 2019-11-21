import {Component, OnInit} from '@angular/core';
import {ProductService} from "../util/service/product.service";
import {Product} from "../util/models/product.model";
import {CartService} from "../util/service/cart.service";
import {CartItem} from "../util/models/cart-item.model";
import {GlobalUserStorageService} from "../util/service/global-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public numbers: number[] = [];
  public selected: string;
  private cartItem: CartItem;

  constructor(private productService: ProductService, private  cartService: CartService,
              private localStorageService: GlobalUserStorageService, private router: Router) {
  }

  ngOnInit() {
    this.cartItem = new CartItem();
    const id = window.location.href.split('id=').pop();
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      this.numbers = Array.from(Array(this.product.quantity), (x, index) => index + 1);
      this.selected = this.numbers[0].toString();
    })
  }

  addToCart(): void {
    this.cartItem.userId = this.localStorageService.currentUser.id;
    this.cartItem.productId = this.product.id;
    this.cartItem.quantity = this.selected;
    this.cartService.addToCart(this.cartItem).subscribe();
    this.router.navigate(['plp']);
  }
}
