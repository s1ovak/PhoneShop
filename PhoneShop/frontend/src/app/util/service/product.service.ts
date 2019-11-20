import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private GET_ALL_URL = '/api/products';

  constructor(private http: HttpClient) {
  }

  getAllProducts(query?: string, sort?: string, order?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (query) {
      params = params.append('query', query);
    }
    if (sort) {
      params = params.append('sort', sort);
    }
    if (order) {
      params = params.append('order', order);
    }
    return this.http.get<Product[]>(this.GET_ALL_URL, {
      params: params
    });
  }
}
