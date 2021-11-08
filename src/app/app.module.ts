//Modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';



//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { DeactivateGuardService } from './guards/comp-form.guard';
import { wishlistReducer } from './store/wishlist/wishlist.reducer';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishItemComponent } from './components/wish-item/wish-item.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ProductsCartComponent,
    SpinnerLoadingComponent,
    WishListComponent,
    WishItemComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({wishlist : wishlistReducer })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpInterceptorInterceptor,
      multi:true,
    },
    DeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
