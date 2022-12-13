import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrls } from 'src/assets/baseurls';
import { Foodmodel } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods!: Foodmodel;
  foodsRetrievedBool = false;
  constructor(private httpClient: HttpClient) {
  }


  getAllFood() {
    this.httpClient.get(BaseUrls.getUrl(BaseUrls.FOODS_GROUPURL))
      .subscribe({
        next: ({ code, data, message }: any) => {
          this.foods.next(data);
          this.foodsRetrievedBool = true;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
}
