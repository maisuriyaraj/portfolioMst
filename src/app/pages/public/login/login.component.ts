import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userCredentials: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]),
  })

  get getLoginForm() {
    return this.loginForm.controls;
  }

  constructor(private authService: AuthService, private loader: NgxSpinnerService, private toastr: ToastrService, private route: Router) { }

  onSubmit(data: any) {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = {
      "userCradiential": data.userCredentials.value,
      "password": data.password.value,
    }

    this.loader.show();
    this.authService.LoginUser(payload).then((response) => {
      if (response?.success) {
        console.log("Response", response);
        this.toastr.success(response.message);
        this.loader.hide();
      }
    }).catch((error) => {
      this.loader.hide();
      console.log("error", error);
      this.toastr.error(error?.error?.message, "Error");
    });
  }
}
