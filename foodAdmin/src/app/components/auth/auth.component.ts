import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { BaseUrls } from 'src/assets/baseurls';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    private authorize: AuthService,
    private toast: ToastrService,
    private http: HttpClient,
    private router: Router
  ) { }


  ngOnInit(): void {
  }


  loginAdmin(value: { email: string; password: string }) {

    const formData = new FormData();
    formData.append("email", value.email.trim() || "");
    formData.append("password", value.password.trim() || "");

    this.http.post(BaseUrls.getLoginUrl(BaseUrls.ADMIN_GROUPURL), formData)
      .subscribe({
        next: ({ code, message, data }: any) => {
          localStorage.setItem("authCodes", data);
          this.router.navigate(['/]', { replaceUrl: true }])
          this.toast.success(message, "Login Successful");
        },
        error: (error) => {
          localStorage.setItem("authCode", "");
          this.toast.warning("Please Check Your Credentials", "");
        }

      })

  }
}
