import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}

