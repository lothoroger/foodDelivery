import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from 'src/app/services/db.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  constructor(private httpClient: HttpClientModule, private foodService: DbService, private cartService: CartService, private router: Router) { }


  foodForm: FormGroup = new FormGroup({});
  foodlist: Food[] = [];
  updation: boolean = false;
  loader: boolean = false;

  ngOnInit(): void {
    this.foodService.getFoods();
    this.foodService.foodSub.subscribe((data) => {
      if (data.length !== 0) this.foodlist = data;

    })
  }

  /*
    addToCart() {
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart');
    } */

}


