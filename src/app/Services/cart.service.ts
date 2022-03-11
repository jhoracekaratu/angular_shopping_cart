import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public InCart:any=[];
public InCart_Subject= new BehaviorSubject<any>([]);
public searchSubject=new BehaviorSubject<string>("");

  constructor() {}

getProducts(){
  return this.InCart_Subject.asObservable();}

  setProduct(product : any){
      this.InCart.push(...product);
      this.InCart_Subject.next(product);
    }

add_to_Cart(product:any){
this.InCart.push(product);
this.InCart_Subject.next(this.InCart);
this.getTotalPrices();
}
remove_From_Cart(product:any){
this.InCart.map((element:any, index:any)=>{
  if (element.id===product.id){
    this.InCart.splice(index,1);
  }
}
);
  this.InCart_Subject.next(this.InCart);

}



removeall(){
  this.InCart=[];
  this.InCart_Subject.next(this.InCart);
}





getTotalPrices():number{
  let grand_Total=0;
  this.InCart.map((element:any)=>{
    grand_Total += element.price;
  });
  return grand_Total;
}











}
