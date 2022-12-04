import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { CustomersComponent } from './components/customers/customers.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cuisines", component: CuisinesComponent },
  { path: "customers", component: CustomersComponent },
  { path: "login", component: LoginComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "register", component: RegisterComponent },
  { path: "orders", component: OrdersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
