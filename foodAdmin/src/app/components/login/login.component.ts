import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
    this.authorize.loginAdmin(this.loginForm.value);
  }

  /*
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
  
  
    
  
  
    loginAdmin = () => {
      if (this.loginForm.invalid) {
        // this.toast.info("All Field Required", "");
        return;
      }
      this.authorize.loginAdmin(this.loginForm.value);
    }
    */
}