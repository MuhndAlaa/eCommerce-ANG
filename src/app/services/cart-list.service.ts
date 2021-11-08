import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  constructor() { }

  //Properties
  private cartCount = new BehaviorSubject(0);
  currentCount = this.cartCount.asObservable();
  cartItems:Array<Product> = [];


  //Methods
  pushCart(product):void{
    this.cartItems.push(product)
  }

  get Cart():Array<Product>{
    return this.cartItems
  }

  updateCart(newCount):void{
    this.cartCount.next(newCount)
  }
}
