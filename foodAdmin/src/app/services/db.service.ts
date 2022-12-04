import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseUrls } from 'src/assets/baseurls';
import { Admin } from '../model/Admin';
import { Customers } from '../model/Customers';
import { Food } from '../model/Food';
import { Orders } from '../model/Orders';



export class Response {
  code: any;
  message: any;
  data: any[] = [];
}

@Injectable({
  providedIn: 'root'
})


export class DBService {

  adminsSub: BehaviorSubject<Admin[]> = new BehaviorSubject<Admin[]>([]);
  adminRetrievedBool: boolean = false;

  customerSub: BehaviorSubject<Customers[]> = new BehaviorSubject<Customers[]>([]);
  custRetrievedBool: boolean = false;

  foodSub: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  foodRetrievedBool: boolean = false;

  orderSub: BehaviorSubject<Orders[]> = new BehaviorSubject<Orders[]>([]);
  orderRetrievedBool: boolean = false;


  constructor(private httpClient: HttpClient) { }


  getAdmin() {
    this.httpClient.get(BaseUrls.getLoginUrl(BaseUrls.ADMIN_GROUPURL))
      .subscribe({
        next: ({ code, data, message }: any) => {

          this.adminsSub.next(data);
          this.adminRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  getCustomers() {
    this.httpClient.get(BaseUrls.getUrl(BaseUrls.CUSTOMERS_GROUPURL))
      .subscribe({
        next: async ({ code, message, data }: any) => {
          console.log('DBservice data', data, code, message);
          this.customerSub.next(Object.assign([], data));
          this.custRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  getFoods() {
    this.httpClient.get(BaseUrls.getUrl(BaseUrls.FOODS_GROUPURL))
      .subscribe({
        next: ({ code, data, message }: any) => {
          this.foodSub.next(Object.assign([], data));
          this.foodRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  getOrders() {
    this.httpClient.get(BaseUrls.getUrl(BaseUrls.ORDERS_GROUPURL))
      .subscribe({
        next: async ({ code, message, data }: any) => {
          console.log('DBservice data', data, code, message);
          this.orderSub.next(Object.assign([], data));
          this.orderRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }






}

