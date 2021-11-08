import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubjectsService } from 'src/app/services/behavior-subjects.service';
import { CartListService } from 'src/app/services/cart-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //Properties
  count:number;
  isLogin:boolean;

  //Methods
  constructor(private cartCount:CartListService , private behaviorSubject:BehaviorSubjectsService , private router:Router) { }

  ngOnInit(): void {
    this.cartCount.currentCount.subscribe(value=> this.count = value)
    this.behaviorSubject.getCurrentAuth().subscribe(value=>this.isLogin=value)
  }

  logOut():void{
    this.behaviorSubject.setCurrentAuth(false);
    localStorage.removeItem("login")
  }
}
