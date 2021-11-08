import { Action } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export class WishlistAction implements Action{
    readonly type="ADD_PRODUCT";
    constructor(public payload:any){}
}

export class RemoveWishlistAction implements Action{
    readonly type="REMOVE_PRODUCT";
    constructor(public payload:any){}
}


export type WishAction = WishlistAction | RemoveWishlistAction;