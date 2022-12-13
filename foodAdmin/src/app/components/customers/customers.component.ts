import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private custService: DBService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toast: ToastrService

  ) {

  }

  ngOnInit(): void {
    this.custService.getCustomers();
    this.custService.customers.subscribe((data) => {
      if (data.length !== 0) this.customers = data;
    })
  }


  openModal(modal: any, cust: Customers | null = null) {
    this.initializeModal(cust);
    this.modalService.open(modal, { size: "xl" });
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
      });
      console.log('customers component update ', this.custForm.value);
    }
  }


  saveCustomer() {
    if (this.updation == true) {
      this.http.put(`${BaseUrls.getUpdateUrl(BaseUrls.CUSTOMERS_GROUPURL)}/${this.custForm.value.custId}`, this.custForm.value)
        .subscribe({
          next: ({ code, data, message }: any) => {
            console.log('Update Customer ts ', this.custForm.value);
            localStorage.setItem("Customer", JSON.stringify(this.custForm.value));
          },
          error: (error) => {
            console.log(error);
            console.log('Update Customer error', this.custForm.value);
          }
        })
    } else {
      console.log('Add Customer ', this.custForm.value)


      this.http.post(`${BaseUrls.getAddUrl(BaseUrls.CUSTOMERS_GROUPURL)}`, this.custForm.value)
        .subscribe({
          next: ({ code, message, data }: any) => {
            console.log("Adding Food ", this.custForm.value);
            localStorage.setItem("Data", JSON.stringify(data));
          },
          error: (error) => {
            console.log("Error ", error);

          }
        })
    }

    this.modalService.dismissAll();
    this.custService.getCustomers();

  }


  deleteCustomer(id: any) {
    this.customers = this.customers.filter(x => x.custId != id)
    this.http.get(`${BaseUrls.getDeleteUrl(BaseUrls.CUSTOMERS_GROUPURL)}/${id}`)
      .subscribe({
        next: (value) => {
          this.customers.splice(id, 1)
          this.toast.success(`Customer with ${id}`, 'Deleted Successfully');
        },
        error: (error) => {
          console.log("Error ", error);
          this.toast.warning("Something went wrong!! Please Try Again...", "Failed");

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