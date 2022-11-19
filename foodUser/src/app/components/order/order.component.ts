import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  foods: Food[] = [];
  food!: Food;

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      this.foods = foodService.getAll();
    })
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    })

  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
  ngOnInit(): void {
  }

}


