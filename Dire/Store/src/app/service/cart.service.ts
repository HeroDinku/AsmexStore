import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[]
public productsList= new BehaviorSubject<any>([]);



  constructor() { }
  getProducts(){
    return this.productsList.asObservable();
  
  }

  setProducts(products:any){
    this.cartItemList.push(...products);
    this.productsList.next(products);
  }


  addtoCart(products :any){
    this.cartItemList.push(products);
    this.productsList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)

  }
  removeCartItem(products :any){
    this.cartItemList.map((a:any,index:any)=>{
      if(products.id===a.id){
        this.cartItemList.splice(index,1)
      }
    });
    
    this.productsList.next(this.cartItemList);
   
  }
  
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;

    


  }
  removeAllCart(){
    this.cartItemList=[]
    this.productsList.next(this.cartItemList);
  }

}
