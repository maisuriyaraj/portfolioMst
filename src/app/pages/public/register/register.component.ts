import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required])
  })

  get registerationForm() {
    return this.registerForm.controls;
  }

  constructor(private authService: AuthService, private loader: NgxSpinnerService, private toastr: ToastrService,private route : Router) {}

  onSubmit(data: any) {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const payload = {
      "fullName": data.fullName.value,
      "email": data.email.value,
      "password": data.password.value,
      "userName": this.generateUsername(data.fullName.value)
    }

    this.loader.show();
    this.authService.RegisterUser(payload).then((response) => {
      if (response?.success) {
        console.log("Response", response);
        this.route.navigate(['/Signin']);
        this.loader.hide();
      }
    }).catch((error) => {
      this.loader.hide();
      console.log("error", error);
      this.toastr.error(error?.error?.message, "Error");
    });
  }

  generateUsername(fullName: string): string {
    // Normalize the full name
    const normalizedFullName = fullName.toLowerCase().trim().replace(/[^a-z\s]/g, '');
    const nameParts = normalizedFullName.split(/\s+/);

    // Base username (first initial + last name or full name parts)
    let baseUsername = '';
    if (nameParts.length >= 2) {
      baseUsername = nameParts[0][0] + nameParts[nameParts.length - 1] + Math.floor(Date.now()) % 100; // e.g., "jdoe"
    } else {
      baseUsername = nameParts[0] + Math.floor(Date.now()) % 100; // e.g., "john"
    }

    // Ensure uniqueness
    let uniqueUsername = baseUsername;

    return uniqueUsername;
  }

}
