import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  //Properties
  products: Array<Product>
  subscribe:any;

  //Methods
  constructor(private productData :ProductDataService) { }

  ngOnInit(): void { 
    this.subscribe= this.productData.getProducts().subscribe(
      data =>{this.products = data},
      error=>{console.log(error)}
    )
  }

  ngOnDestroy(): void{
    this.subscribe.unsubscribe()
  }
}