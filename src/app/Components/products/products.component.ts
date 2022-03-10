import { Component, OnInit } from '@angular/core';
import {ApiService } from "src/app/Services/api.service";
import {CartService } from "src/app/Services/cart.service";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products: any;
  constructor(private api: ApiService, private Cart_Service:CartService) { }

  ngOnInit(): void {
  this.api.getProducts().subscribe(res=>{
    this.Products=res;
  });
  }
  addToCart(product:any){
    this.Cart_Service.add_to_Cart(product);
  }

}
