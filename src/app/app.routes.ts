import { Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { ForgotPasswordComponent } from './pages/public/forgotPassword/forgotPassword.component';
import { StudioComponent } from './pages/studio/studio.component';
import { authGuard } from './guard/auth.guard';
import { publicGuard } from './guard/public.guard';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'Signin',
        pathMatch : 'full'
    },
    {   
        path : 'Signin',
        canActivate : [publicGuard],
        component : LoginComponent
    },
    {
        path:'Register',
        canActivate : [publicGuard],
        component : RegisterComponent
    },
    {
        path:'forgotPassword',
        canActivate : [publicGuard],
        component : ForgotPasswordComponent
    },
    {
        path : 'studio',
        component : StudioComponent,
        canActivate : [authGuard],
        loadChildren : () => import('./pages/studio/studio.module').then((m) => m.StudioModule)
    }
];
