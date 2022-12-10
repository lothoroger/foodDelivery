import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/model/Customers';
import { DBService } from 'src/app/services/db.service';
import { BaseUrls } from 'src/assets/baseurls';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  customers: Customers[] = [];
  custForm: FormGroup = new FormGroup({});
  updation: boolean = false;

  orderForm: FormGroup = new FormGroup({});
  constructor(private http: HttpClient, private baseurl: BaseUrls, private custService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.custService.getCustomers();
    this.custService.customerSub.subscribe((data) => {
      if (data.length !== 0) this.customers = data;
    })


  }

  customer = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  };

  openModal(modal: any, cust: Customers | null = null) {
    console.log('CustObj', cust);
    this.initializeModal(cust);
    this.modalService.open(modal);
  }

  initializeModal(cust: Customers | null) {
    if (cust === null) {
      this.updation = false;
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
      this.updation = true;
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
      }
      );
    }
  }


  saveCustomer() {

    if (this.updation == true) {
      console.log('Update Customer ', this.customer);
      this.custService.updateCustomer(this.customer).subscribe(x => console.log(x));

    } else {
      console.log('Update Customer ', this.customer);
      this.custService.addCustomer(this.customer).subscribe(x => console.log(x));
    }
  }



  deleteCustomer(id: any) {
    this.customers = this.customers.filter(x => x.custId != id)
    this.http.get(`${BaseUrls.getDeleteUrl(BaseUrls.CUSTOMERS_GROUPURL)}/${id}`)
      .subscribe({
        next: (value) => {
          this.customers.splice(id, 1)
        },
        error: (error) => {
          console.log("Error ", error);
        }
      })

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