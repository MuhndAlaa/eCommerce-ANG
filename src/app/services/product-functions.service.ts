import { Injectable } from '@angular/core';
import { CartListService } from './cart-list.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductFunctionsService {
  
  //Properties
  count:number;
  private total:BehaviorSubject<number> = new BehaviorSubject(this.totalPrice());
  currentTotal:Observable<number> = this.total.asObservable();


  //Methods
  constructor(private cartList:CartListService) { 
    this.cartList.currentCount.subscribe(value=>this.count = value)
  }

  totalPrice():number{
    return this.cartList.Cart.reduce((sum,elem)=> sum+elem.price*elem["quantity"],0)
  }

  updateTotalPrice(newTotal):void{
    this.total.next(newTotal)
  } 

  checkProduct(products , product):boolean{
    for(let elem of products){
        if(elem.id == product.id) return true
    }
    return false
  }

  addQuantity(product):void{
    Object.defineProperties(product ,{quantity:{value:1,writable:true}
    }) 
  }

  updateCartInfo(state=true):void{
    if(state)this.cartList.updateCart(++this.count);
    if(!state)this.cartList.updateCart(--this.count);
    this.updateTotalPrice(this.totalPrice())
  }

  updateCartItems(product):void{
    this.cartList.updateCart(++this.count);
    this.cartList.pushCart(product)
    this.updateTotalPrice(this.totalPrice())
  }


  checkObject(product , state=true):void{
    let flag = true;
    //If product added before
    for(let p of this.cartList.Cart){
      if(p.title == product.title){
        if(state){
          ++p.quantity;
          this.updateCartInfo(true)
        }
        if(!state){
          --p.quantity;
          this.updateCartInfo(false)
        }
        
        flag = false
      }
    }
    //If product added first time
    if(flag){
      this.addQuantity(product)
      this.updateCartItems(product)
    }
    //If array is empty
    if(this.cartList.Cart.length == 0){
      this.addQuantity(product)     
      this.updateCartItems(product)
    }
  }

  

}






