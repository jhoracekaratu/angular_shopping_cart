import { Component, OnInit } from '@angular/core';
import {CartService } from "src/app/Services/cart.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItems:number=0;
  constructor(private Cart_Service:CartService) { }

  ngOnInit(): void {
this.Cart_Service.getProducts().subscribe(res=>{
  console.log(res);
  this.totalItems=res.length;

});
  }

}
