import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { sample_foods } from '../sample_foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private food: Food = this.getFoodFromLocalStorage();

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }



  private getFoodFromLocalStorage(): Food {
    const foodJson = localStorage.getItem('Food');
    return foodJson ? JSON.parse(foodJson) : new Food();
  }
}
