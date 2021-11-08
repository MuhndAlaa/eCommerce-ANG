import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  //Methods
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products`);
  }

  getProductDetails(id):Observable<any>{
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

}
