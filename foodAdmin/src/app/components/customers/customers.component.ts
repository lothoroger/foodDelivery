import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/model/Customers';
import { DBService } from 'src/app/services/db.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  customers: Customers[] = [];
  custForm: FormGroup = new FormGroup({});


  orderForm: FormGroup = new FormGroup({});
  constructor(private custService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.custService.getCustomers();
    this.custService.customerSub.subscribe((data) => {
      if (data.length !== 0) this.customers = data;
    })

  }

  openModal(modal: any, cust: Customers | null = null) {

    console.log('CustObj', cust);
    this.initializeModal(cust);
    this.modalService.open(modal);
  }

  initializeModal(cust: Customers | null) {
    if (cust === null) {
      this.custForm = this.fb.group({
        custId: [null],
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        phone: ["", Validators.required],
        address: ["", Validators.required],
        city: ["", Validators.required],
        state: ["", Validators.required],
        zip: ["", Validators.required],
      });
    } else {

      this.custForm = this.fb.group({
        custId: [cust.custId],
        firstname: [cust.firstname, Validators.required],
        lastname: [cust.lastname, Validators.required],
        email: [cust.email, Validators.required],
        password: [cust.password, Validators.required],
        phone: [cust.phone, Validators.required],
        address: [cust.address, Validators.required],
        city: [cust.city, Validators.required],
        state: [cust.state, Validators.required],
        zip: [cust.zip, Validators.required],
      });
    }
  }


}







/*

updateCustomer() {
  let formData: FormData = new FormData();
  Object.entries(this.customerForm.value).forEach(([key, value]: [string, any], idx: number) => {
    this.formData.append(key, value);
  });

  this.httpClient.post(BaseUrls.getUpdateUrl(BaseUrls.CUSTOMERS_GROUPURL), formData)
    .subscribe({
      next: ({ code, message, data }: any) => {
        localStorage.setItem("customers", JSON.stringify(data[0]));
        this.toast.success("Profile updated", "Success")
      },
      error: (error) => {
        this.toast.warning("Something Went Wrong!! Pleaes Try Again...", "Failed");

      },
    })



} 

}
*/