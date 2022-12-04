import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/Admin';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { BaseUrls } from 'src/assets/baseurls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMsg: string | undefined;
  loginInProcess: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })





  constructor(
    private authorize: AuthService,
    // private toast: ToastrService,
    private http: HttpClient,
    private router: Router
  ) { }


  ngOnInit(): void {
  }


  loginAdmin = () => {
    if (this.loginForm.invalid) {
      // this.toast.info("All Field Required", "");
      return;
    }
    this.authorize.loginAdmin(this.loginForm.value);
  }
}