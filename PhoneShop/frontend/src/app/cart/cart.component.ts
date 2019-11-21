import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../util/service/cart.service";
import {Cart} from "../util/models/cart.model";
import {MatTableDataSource} from "@angular/material";
import {Product} from "../util/models/product.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Order} from "../util/models/order.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderForm: FormGroup;
  public cart: Cart;
  private dataSource;
  private order: Order;

  private displayedColumns: string[] = ['imageUrl', 'description', 'price', 'quantity', 'deleteButtons'];

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    this.order = new Order();
    this.dataSource = new MatTableDataSource();
    this.initializeForm()

    this.cartService.getCart().subscribe(response => {
      this.cart = response;
      this.dataSource = response.products;
    })
  }

  private initializeForm() {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  get firstName(): FormControl {
    return this.orderForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.orderForm.get('lastName') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.orderForm.get('phoneNumber') as FormControl;
  }

  get address(): FormControl {
    return this.orderForm.get('address') as FormControl;
  }

  onDeleteClick(product: Product) {
    this.cartService.deleteCartItem(product.id).subscribe(resp => {
      this.cartService.getCart().subscribe(response => {
        this.cart = response;
        this.dataSource = response.products;
      })
    });
  }

  isNotEmptyCart(): boolean {
    if (this.cart.products.length > 0) {
      return true;
    } else return false;
  }

  getErrorText(controlName: string): string {
    const control = this.orderForm.get(controlName) as FormControl;
    if (control.errors['required']) {
      return 'Field is required';
    }
  }

  onPlaceOrderClick() {
    this.order.cart = this.cart;
    this.order.firstName = this.orderForm.get('firstName').value;
    this.order.lastName = this.orderForm.get('lastName').value;
    this.order.phoneNumber = this.orderForm.get('phoneNumber').value;
    this.order.address = this.orderForm.get('address').value;

    this.cartService.placeOrder(this.order).subscribe( resp => {
      this.router.navigate(['plp']);
    })
  }
}
