import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartListService } from 'src/app/services/cart-list.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { ProductFunctionsService } from 'src/app/services/product-functions.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //Properties
  product:Product;
  id:number;
  count:number;
  productLoaded: Promise<boolean>;
  subscribe:any;

  //Methods
  constructor(private route: ActivatedRoute ,private productData :ProductDataService , private cartList:CartListService , private productFn:ProductFunctionsService) { 
    this.id = this.route.snapshot.params.id;
  }
  
  ngOnInit(): void {
    this.cartList.currentCount.subscribe(value=>this.count = value);
    this.subscribe = this.productData.getProductDetails(this.id).subscribe(
      data =>{
        this.product = data
        this.productLoaded = Promise.resolve(true);
      },
      error=>{console.log(error)}
    )
  }

  addToCart(product):void{
    this.productFn.checkObject(product)
  }

  ngOnDestroy(): void{
    this.subscribe.unsubscribe()
  }

}
