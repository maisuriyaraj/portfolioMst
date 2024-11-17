import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/public/forgotPassword/forgotPassword.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  exports : [NgxSpinnerModule,ToastrModule,CommonModule],
  providers: [DataService,AuthService]
})
export class AppModule { }
