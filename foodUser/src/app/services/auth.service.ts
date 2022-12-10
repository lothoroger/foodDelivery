import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BaseUrls } from 'src/assets/baseurls';
import { Customers } from '../models/Customers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  customerSub: BehaviorSubject<Customers[]> = new BehaviorSubject<Customers[]>([]);
  custRetrievedBool: boolean = false;


  constructor(private httpClient: HttpClient, private router: Router) { }


  loginCustomer() {
    this.httpClient.get(BaseUrls.getLoginUrl(BaseUrls.CUSTOMERS_GROUPURL))
      .subscribe({
        next: ({ code, data, message }: any) => {
          localStorage.setIteam("authCode", code);
          this.router.navigate(['/'], { replaceUrl: true })
        },
        error: (error) => {
          console.log(error);
          localStorage.setitem("authCode", "");
        }
      })
  }

}