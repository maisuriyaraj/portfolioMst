import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ForgotPasswordComponent } from './pages/public/forgotPassword/forgotPassword.component';
import { StudioComponent } from './pages/studio/studio.component';
import { authGuard } from './guard/auth.guard';

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
    },
    {
        path : 'studio',
        component : StudioComponent,
        canActivate : [authGuard],
        loadChildren : () => import('./pages/studio/studio.module').then((m) => m.StudioModule)
    }
];
