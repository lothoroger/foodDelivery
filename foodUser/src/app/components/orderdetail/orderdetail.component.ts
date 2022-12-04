import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/services/cart.service';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  food: Food[] = [];
  foodId: any;
  constructor(activatedRoute: ActivatedRoute, private foodService: DbService,
    private cartService: CartService, private router: Router) {
    /* activatedRoute.params.subscribe((params) => {
       if (params.id) this.food = foodService.getFoodById(params.id);
      }) */
  }

  ngOnInit(): void {
    this.foodService.getFoodById(this.foodId);
    this.foodService.foodSub.subscribe((data) => {
      if (data.length !== 0) this.foodId = data.filter(data => data.foodId?.includes(this.foodId));

    })
  }
}
/*
  addToCart() {
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart');
    } */


