import {Component, OnInit} from '@angular/core';
import {ProductService} from "../util/service/product.service";
import {Router} from "@angular/router";
import {Product} from "../util/models/product.model";
import {MatTableDataSource, Sort} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GlobalUserStorageService} from "../util/service/global-storage.service";

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {

  queryForm: FormGroup;

  private products: Product[];
  private dataSource;

  private currentQuery: string;
  private currentSort: string;
  private currentOrder: string;

  private displayedColumns: string[] = ['imageUrl', 'description', 'price', 'quantity'];

  constructor(private productService: ProductService,
              private router: Router,
              private fb: FormBuilder,
              private localStorage: GlobalUserStorageService) {
  }

  ngOnInit() {
    this.queryForm = this.fb.group({
      'query': new FormControl()
    });

    this.dataSource = new MatTableDataSource();
    this.currentOrder = null;
    this.currentSort = null;
    this.currentOrder = null;
    this.productService.getAllProducts().subscribe(response => {
      this.products = response;
      this.dataSource = response;
    })
  }

  onSort(sort: Sort): void {
    this.currentSort = sort.active;
    this.currentOrder = sort.direction;

    this.productService.getAllProducts(this.currentQuery, this.currentSort, this.currentOrder).subscribe(response => {
      this.products = response;
      this.dataSource = response;
    })
  }

  onSearchClick() {
    this.currentQuery = this.queryForm.get('query').value;

    this.productService.getAllProducts(this.currentQuery, this.currentSort, this.currentOrder).subscribe(response => {
      this.products = response;
      this.dataSource = response;
    })
  }

  getProductHref(id: string): void {
    const lastViewedProducts = this.localStorage.lastViewedProducts;
    if (!lastViewedProducts) {
      this.localStorage.lastViewedProducts = [id];
    } else if (lastViewedProducts.some(productId => productId === id)) {
      return;
    } else if (lastViewedProducts && lastViewedProducts.length < 3) {
      this.localStorage.lastViewedProducts = lastViewedProducts.concat([id]);
    } else {
      this.localStorage.lastViewedProducts = lastViewedProducts.slice(1, 3).concat([id]);
    }
  }


}
