import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UsersModule { }
