import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubjectsService } from 'src/app/services/behavior-subjects.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private behaviorSubject:BehaviorSubjectsService, private router:Router) { }

  ngOnInit(): void {
  }

  submitLogin(loginForm):void{
    let registered = JSON.parse(localStorage.getItem("registered"));
    if(registered.email == loginForm.value.email && registered.password == loginForm.value.password){
      this.behaviorSubject.setCurrentAuth(true)
      this.router.navigate(['/home']);
      localStorage.setItem("login" , JSON.stringify(loginForm.value))
    }
    
  }

}
