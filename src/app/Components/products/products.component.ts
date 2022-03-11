import { Component, OnInit } from '@angular/core';
import {ApiService } from "src/app/Services/api.service";
import {CartService } from "src/app/Services/cart.service";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public Products: any;
public FilteredCategory:any;
public SearchTerm:string="";
  constructor(private api: ApiService, private Cart_Service:CartService) { }

  ngOnInit(): void {
  this.api.getProducts().subscribe(res=>{
    this.Products=res;
    this.FilteredCategory=res;
    this.Products.forEach((element:any) => {
      if (element.category==="women's clothing"||element.category==="women's clothing"){
        element.category="fashion";
      }
      Object.assign(element,{quanity:1, total:element.price});
    });


  });
  this.Cart_Service.searchSubject.subscribe((res:any)=>{
    this.SearchTerm=res;



  });
  }
  addToCart(product:any){
    this.Cart_Service.add_to_Cart(product);
  }

  filter(category: string){
this.FilteredCategory=this.Products.filter((element:any)=>{
  if(element.category==category||category===""){
    return element;


  }
});

  }

}
