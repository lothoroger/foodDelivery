import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseUrls } from 'src/assets/baseurls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastrService) { }

  loginAdmin(value: { email: string; password: string }) {

    const formData = new FormData();
    formData.append("email", value.email.trim() || "");
    formData.append("password", value.password.trim() || "");

    this.http.post(BaseUrls.getLoginUrl(BaseUrls.ADMIN_GROUPURL), formData)
      .subscribe({
        next: ({ code, message, data }: any) => {
          localStorage.setItem("authCode", code);
          this.router.navigate(['/'], { replaceUrl: true })
          this.toast.success(message, "Login Administrator Successful");
        },
        error: (error) => {
          localStorage.setItem("authCode", "");
          this.toast.warning("Please Check Your Credentials", "");
        }
      })





  }





}
