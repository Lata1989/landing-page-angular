import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Formularios tipo plantilla
    ReactiveFormsModule // Formularios reactivos.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
