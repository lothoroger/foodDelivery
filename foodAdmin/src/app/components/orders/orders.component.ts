import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Orders } from 'src/app/model/Orders';
import { DBService } from 'src/app/services/db.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders: Orders[] = [];
  orderForm: FormGroup = new FormGroup({});

  constructor(private orderService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.orderService.getOrders();
    this.orderService.orderSub.subscribe((data) => {
      if (data.length !== 0) this.orders = data;
    })

  }










  openModal(modal: any, custObj = null) {
    console.log('CustObj', custObj);

    //this.tempImageFiles = [];
    //this.initialiseModal(fod);
    this.modalService.open(modal);
  }
}
