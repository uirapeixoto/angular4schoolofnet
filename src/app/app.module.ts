import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ProductsModule } from '../products/products.module';

const appRoutes: Routes = [
    {path: '', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
