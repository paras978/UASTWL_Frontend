import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ApiJsonComponent } from './pages/api-json/api-json.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './pages/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductInputComponent } from './pages/product/input/product-input.component';
import { ProductListComponent } from './pages/product/list/product-list.component';
import { NumberPipe } from './pages/product/number.pipe';
import { RupiahPipe } from './pages/product/rupiah.pipe';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/login/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ApiJsonComponent,
    FormComponent,
    ProductInputComponent,
    ProductListComponent,
    LoginComponent,
    RegistrationComponent,
    NumberPipe,
    RupiahPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
