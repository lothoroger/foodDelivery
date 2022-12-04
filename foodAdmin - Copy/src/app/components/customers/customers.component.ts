import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
//import { Observable } from 'rxjs';
import { Customers } from 'src/app/model/Customers';
import { DBService } from 'src/app/services/db.service';
//import { BaseUrls } from 'src/assets/baseurls';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  customers: Customers[] = [];


  constructor(private customerService: DBService,
    private httpClient: HttpClient

  ) {

  }

  ngOnInit(): void {
    this.customerService.getCustomers();
    this.customerService.customers.subscribe((data) => {
      if (data.length !== 0) this.customers = data;
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