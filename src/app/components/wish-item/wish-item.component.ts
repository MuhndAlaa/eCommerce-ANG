import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Store } from '@ngrx/store';
import { RemoveWishlistAction } from 'src/app/store/wishlist/wishlist.action';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent implements OnInit {

  @Input() product:Product;
  constructor(private _store:Store<any>) { }

  ngOnInit(): void {}

  removeItem(id):void{
    this._store.dispatch(new RemoveWishlistAction(id))
  }

}
