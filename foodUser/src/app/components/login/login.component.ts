import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BaseUrls } from 'src/assets/baseurls';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string | undefined;
  loginProcess: boolean = false;


  constructor(
    private authorize: AuthService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) { }


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })










  ngOnInit(): void {
  }


  loginCustomer = () => {
    if (this.loginForm.invalid) {
      // this.toast.info("All Field Required", "");
      return;
    }
    this.authorize.loginCustomer();
  }
}