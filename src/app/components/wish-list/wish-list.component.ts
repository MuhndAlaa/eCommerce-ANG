import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  toggleFlag:boolean = true;
  @ViewChild("wishList") wishList:Array<Product>;
  products:Array<Product>;

  constructor(private _store:Store<any>) { }

  ngOnInit(): void {
    this._store.select("wishlist").subscribe(data=> this.products = data)
  }

  toggleWishList():void{
    this.toggleFlag = this.toggleFlag ? false :true;
  }

}
