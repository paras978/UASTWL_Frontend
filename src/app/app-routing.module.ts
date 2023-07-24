import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ApiJsonComponent } from './pages/api-json/api-json.component';
import { FormComponent } from './pages/form/form.component';
import { ProductInputComponent } from './pages/product/input/product-input.component';
import { ProductListComponent } from './pages/product/list/product-list.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/login/registration/registration.component';

const routes: Routes = [
  { path: 'navbar',       component:NavComponent },
  { path: 'Api',          component:ApiJsonComponent},
  { path: 'Form',         component:FormComponent},
  { path: 'Input',         component:ProductInputComponent},
  { path: 'List',         component:ProductListComponent},
  { path: 'login',         component:LoginComponent},
  { path: 'register',         component:RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
