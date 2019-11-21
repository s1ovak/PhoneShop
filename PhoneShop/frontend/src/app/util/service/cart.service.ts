import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CartItem} from "../models/cart-item.model";
import {Observable} from "rxjs";
import {Cart} from "../models/cart.model";
import {GlobalUserStorageService} from "./global-storage.service";
import {Order} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private ADD_TO_CART_URL = '/api/cart/add';
  private GET_CART_URL = '/api/cart';
  private DELETE_CART_ITEM_URL = '/api/cart/delete';
  private PLACE_ORDER_URL = '/api/cart/order';

  constructor(private http: HttpClient, private localStorage: GlobalUserStorageService) {
  }

  addToCart(cartItem: CartItem): Observable<any> {
    const body = JSON.stringify(cartItem);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {headers: headers};
    return this.http.post<any>(this.ADD_TO_CART_URL, body, options);
  }

  getCart(): Observable<Cart> {
    let params = new HttpParams();
    params.append('userId', this.localStorage.currentUser.id);
    return this.http.get<Cart>(this.GET_CART_URL + '?userId=' + this.localStorage.currentUser.id);
  }

  deleteCartItem(productId: string): Observable<any> {
    const body = null;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {headers: headers};
    return this.http.post<any>(this.DELETE_CART_ITEM_URL + '?userId=' +
      this.localStorage.currentUser.id + '&productId=' + productId, body, options);
  }

  placeOrder(order: Order): Observable<any> {
    const body = JSON.stringify(order);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {headers: headers};
    return this.http.post<any>(this.PLACE_ORDER_URL, body, options);
  }
}
