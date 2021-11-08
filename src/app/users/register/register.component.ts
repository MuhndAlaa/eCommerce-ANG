import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubjectsService } from 'src/app/services/behavior-subjects.service';

import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PassmatchComponent } from './passmatch.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //Properties
  signinForm: FormGroup

  //Methods
  constructor(private fb: FormBuilder , private behaviorSubject:BehaviorSubjectsService, private router:Router) {
    this.signinForm = fb.group({
      userName: [null, [Validators.required]],
      userEmail: [null, [Validators.required, Validators.email]],
      userUsername: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9.\-_$@*!]{3,30}$")]],
      userPass: [null, [Validators.required, Validators.maxLength(8), Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{1,8}')]],
      userConfirmPass: [null, [Validators.required]],
      userLocation: this.fb.array([])
    },
      {
        validator: PassmatchComponent("userPass", "userConfirmPass")
      })
  }

  ngOnInit(): void { }

  submitSignin(): void {
    localStorage.setItem("registered" , JSON.stringify(this.signinForm.value) )
    this.router.navigate(['/login']);
  }

  getLocation(i): any {
    return this.signinForm.controls.userLocation['controls'][i]['controls'];
  }

  get getSignForm(): any {
    return this.signinForm.controls;
  }



  addLocations(): void {
    const locations = this.signinForm.controls.userLocation as FormArray;
    locations.push(this.fb.group({
      address: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9_ .-]*$")]],
      street: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9_ .-]*$")]],
      country: ["", [Validators.required, Validators.pattern("^[a-zA-Z_ .-]*$")]],
      city: ["", [Validators.required, Validators.pattern("^[a-zA-Z_ .-]*$")]]
    }));
  }

  removeLocation(i): void {
    const locations = this.signinForm.controls.userLocation as FormArray;
    locations.removeAt(i);
  }



  trackByFn(index, item):number {
    return index;
  }


  canDeactivate(): Observable<boolean> | boolean {

    if (this.signinForm.valid) {
      return true
    }else if(this.signinForm.dirty){
      const confirm  = window.confirm('Are you sure?');
      return confirm;
    }
    return true;
  }

}
