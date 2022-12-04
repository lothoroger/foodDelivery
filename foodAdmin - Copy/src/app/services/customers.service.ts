import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomers() {
    return this.httpClient.get<any[]>("./assets/data/customers.json");
  }
}