import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const publicGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const router = inject(Router);

  // Get a cookie
  const value = cookieService.get('access_token');
  if (value && value != undefined && value != '') {
    router.navigate(['/studio/dashboard']);
    return false;
  }
  return true;
};
