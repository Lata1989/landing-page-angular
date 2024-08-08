import { Component, OnInit } from '@angular/core';
import { productList } from './products.mock';
import { IProduct } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productList: IProduct[] = [];

  constructor(private _apiService: ApiService){

  }
  
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]): void => {
      console.log(data);
      this.productList = data;
    });
  }
;

}
