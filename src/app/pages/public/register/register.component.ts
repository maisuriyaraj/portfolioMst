import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]),
    confirm_password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(14)])
  })

 get registerationForm (){
    return this.registerForm.controls;
 }

  constructor(){

  }

  onSubmit(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }
  }


}
