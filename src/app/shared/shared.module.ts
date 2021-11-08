import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent
  ]
})
export class SharedModule { }
