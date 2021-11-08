import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartListService } from 'src/app/services/cart-list.service';
import { ProductFunctionsService } from 'src/app/services/product-functions.service';
import { Store } from '@ngrx/store';
import { WishlistAction } from 'src/app/store/wishlist/wishlist.action';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})


export class ProductItemComponent implements OnInit {

  //Properties
  @Input() product:Product;
  count:number;
  wishProducts:Array<Product>

  
  constructor(private _route:Router , private cartList:CartListService , private productFn:ProductFunctionsService , private _store:Store<any>) {}

  ngOnInit():void {
    this.cartList.currentCount.subscribe(value=>this.count = value)
    this._store.select("wishlist").subscribe(data=> this.wishProducts = data) 

  }
  
  goToDetails():void{
    this._route.navigate(['/product-deatils' , this.product.id]);
  }

  addtoCart(event,product):void{
    event.stopPropagation();
    this.productFn.checkObject(product)
  }

  addtoWishlist(event ,product):void{
    event.stopPropagation();
    this._store.dispatch(new WishlistAction(JSON.parse(JSON.stringify(product))))
  }

  checkWishlist(product):boolean{
    if( this.checkProduct(product)) return true
    return false
  }

  checkProduct(product):boolean{
    for(let elem of this.wishProducts){
      if(elem.id == product.id) return true
    }
    return false
  }
  
}
