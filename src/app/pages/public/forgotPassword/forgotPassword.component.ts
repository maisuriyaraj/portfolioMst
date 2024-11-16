import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotPassword',
  standalone: false,
  templateUrl: './forgotPassword.component.html',
  styleUrl: './forgotPassword.component.scss'
})
export class ForgotPasswordComponent {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]),
  })

 get getLoginForm (){
    return this.loginForm.controls;
 }

  constructor(){

  }

  onSubmit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
  }
}
