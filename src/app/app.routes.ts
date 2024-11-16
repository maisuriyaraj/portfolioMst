import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ForgotPasswordComponent } from './pages/public/forgotPassword/forgotPassword.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'Signin',
        pathMatch : 'full'
    },
    {   
        path : 'Signin',
        component : LoginComponent
    },
    {
        path:'Register',
        component : RegisterComponent
    },
    {
        path:'forgotPassword',
        component : ForgotPasswordComponent
    }
];
