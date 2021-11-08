import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {DeactivateGuardService} from "./../guards/comp-form.guard"
import { LoginGuard } from "../guards/login.guard";

const routes: Routes = [
    {path:'' , redirectTo:"login" , pathMatch:"full"},
    {path:'login' , canActivate:[LoginGuard] , component:LoginComponent},
    {path:'register' , canActivate:[LoginGuard] ,canDeactivate:[DeactivateGuardService], component:RegisterComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UsersRoutingModule {}