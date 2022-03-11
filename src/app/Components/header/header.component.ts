import { Component, OnInit } from '@angular/core';
import {CartService } from "src/app/Services/cart.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItems:number=0;
public SearchTerm:string="";
  constructor(private Cart_Service:CartService) { }

  ngOnInit(): void {
this.Cart_Service.getProducts().subscribe(res=>{
  this.totalItems=res.length;

});
  }

  search(event:any){
    this.SearchTerm=(event.target as HTMLInputElement).value;
    this.Cart_Service.searchSubject.next(this.SearchTerm);


  }

}
