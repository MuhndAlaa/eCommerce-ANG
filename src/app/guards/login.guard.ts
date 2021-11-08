import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BehaviorSubjectsService } from 'src/app/services/behavior-subjects.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  isLogin:boolean;

  constructor(private behaviorSubjects:BehaviorSubjectsService , private router:Router){
    this.behaviorSubjects.getCurrentAuth().subscribe(value=>this.isLogin =value )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.isLogin){
        return true
      }else{
        this.router.navigate(['/home']);
        return false
      }
  }
  
}
