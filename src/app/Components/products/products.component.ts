import { Component, OnInit } from '@angular/core';
import {ApiService } from "src/app/Services/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  this.api.getProducts().subscribe(res=>{
    this.Products=res;
  });
  }

}
