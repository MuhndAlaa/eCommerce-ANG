import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartListService } from 'src/app/services/cart-list.service';

import { ProductFunctionsService } from 'src/app/services/product-functions.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.scss']
})
export class ProductsCartComponent implements OnInit {

  //Properties
  products:Array<Product>
  totalPrice:number;

  //Methods
  constructor(private cartList:CartListService , private productFn:ProductFunctionsService) { }

  ngOnInit(): void {
    this.products = this.cartList.cartItems;
    this.productFn.currentTotal.subscribe(value=>this.totalPrice=value);
  }

  increaseQuantity(product):void{
    this.productFn.checkObject(product)
  }

  decreaseQuantity(product,i):void{
    this.productFn.checkObject(product,false)
    if(product.quantity == 0){
      this.products.splice(i,1)
    }
  }
}
