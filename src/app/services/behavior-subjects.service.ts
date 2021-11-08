import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class BehaviorSubjectsService {



  private currentAuth = new BehaviorSubject(this.isLoggedIn());
  private isLoadingRequest = new BehaviorSubject(false)
  constructor() { }

  getCurrentAuth():any{
    return this.currentAuth
  }

  setCurrentAuth(isLogin):void{
    this.currentAuth.next(isLogin);
  }

  getIsLoadingRequest():any{
    return this.isLoadingRequest
  }

  setIsLoadingRequest(isLoading):void{
    this.isLoadingRequest.next(isLoading)
  }

  isLoggedIn():boolean{
    let auth = localStorage.getItem("login");
    if(auth !=null)return true
    return false
  }
}
