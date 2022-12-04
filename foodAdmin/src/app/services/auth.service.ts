import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseUrls } from 'src/assets/baseurls';


@Injectable({
  providedIn: 'root'
})



export class AuthService {
  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private router: Router
  ) { }

  loginAdmin(value: { email: string; password: string }) {
    const formData = new FormData();
    formData.append("email", value.email.trim() || "");
    formData.append("password", value.password.trim() || "");

    this.http.post(BaseUrls.getLoginUrl(BaseUrls.ADMIN_GROUPURL), formData)
      .subscribe({
        next: ({ code, message, data }: any) => {
          localStorage.setItem("admin", JSON.stringify(data[0]));
          this.toast.success(message, "Login Successfull");
          this.router.navigate(['/'], { replaceUrl: true })
        },
        error: (error) => {
          localStorage.setItem("admin", JSON.stringify(null));
          this.toast.warning("Please Check Your Credentials", "");
        }
      })
  }

  registerAdmin(values: any) {
    const formData: FormData = new FormData();
    Object.entries(values).forEach(([key, value]: [string, any], idx: number) => {
      formData.append(key, value);
    });

    this.http.post(BaseUrls.getAddUrl(BaseUrls.ADMIN_GROUPURL), formData)
      .subscribe({
        next: ({ code, message, data }: any) => {
          localStorage.setItem("admin", JSON.stringify(data[0]));
          // this.router.navigate(['/'], { replaceUrl: true })
          setTimeout(() => this.router.navigate(['/'], { replaceUrl: true }), 2000)
          this.toast.success("", "Registered Successfull");
        },
        error: (error) => {
          console.log(error);

          localStorage.setItem("admin", JSON.stringify(null));
          this.toast.warning("Something Went Wrong!! Please Again...", "Failed");
        }
      })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'], { replaceUrl: true });
  }
}