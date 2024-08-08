import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { productList, Product } from '../products/products.mock';
import { IProduct } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  productList: IProduct[] = [];
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) {

  };
  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          }
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    /*
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number > 500 ? 'red' : '';
        this.loading = false;
      });
    }, 1500);
    */
    // console.log(params['productId']);

  };


}
