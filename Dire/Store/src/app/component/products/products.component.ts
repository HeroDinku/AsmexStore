import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList :any;

  constructor(private api:ApiService, private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
      .subscribe (res=> {
    this.productsList= res;

    this.productsList.forEach((a:any) => {
      Object.assign(a,{quality:1,total:a.price});
      
    });
    })
  
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);

  }

}
