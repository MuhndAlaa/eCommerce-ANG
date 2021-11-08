import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"products" , component:ProductsListComponent},
  {path:"home" , component:HomepageComponent},
  {path:"cart" , canActivate:[AuthGuard] ,component:ProductsCartComponent},
  {path:"product-deatils/:id" , component:ProductDetailsComponent},
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {path:'**' , redirectTo:"home" , pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
