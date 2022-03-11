import { Component, OnInit } from '@angular/core';
import {CartService} from "src/app/Services/cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any=[];
    public grand_Total !:number;
  constructor(private cart_Service:CartService) { }

  ngOnInit(): void {
this.cart_Service.getProducts().subscribe(res=>{


  this.products=res;
  this.grand_Total=this.cart_Service.getTotalPrices();


})
  }

  removeall(){
    this.cart_Service.removeall();
  }
  remove(product:any){
    this.cart_Service.remove_From_Cart(product);
  }

}
