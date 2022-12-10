import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseUrls } from 'src/assets/baseurls';
import { Customers } from '../models/Customers';
import { Food } from '../models/Food';


export class Response {
  code: any;
  message: any;
  data: any[] = [];
  list: any[] = [];

}




@Injectable({
  providedIn: 'root'
})
export class DbService {
  foodSub: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  foodRetrievedBool: boolean = false;

  customerSub: BehaviorSubject<Customers[]> = new BehaviorSubject<Customers[]>([]);
  custRetrievedBool: boolean = false;




  constructor(private httpClient: HttpClient) { }

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


  getCustomer() {
    this.httpClient.get(BaseUrls.getUrl(BaseUrls.CUSTOMERS_GROUPURL))
      .subscribe({
        next: ({ code, data, message }: any) => {
          console.log('Get customer ', data);
          this.customerSub.next(Object.assign([], data));
          this.custRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }




  /*
    getFoodById(foodId: string) {
      this.httpClient.get(BaseUrls.getUrlById(BaseUrls.FOODS_GROUPURL))
        .subscribe({
          next: ({ code, data, message }: any) => {
            this.foodSub.next(Object.assign([], data.foodId));
            this.foodRetrievedBool = true;
          },
          error: (error) => {
            console.log(error);
          }
        })
    }*/

}


