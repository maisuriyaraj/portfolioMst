import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const router = inject(Router);

  // Get a cookie
  const value = cookieService.get('access_token');
  if (!value || value == undefined || value == '') {
    router.navigate(['/']);
    return false;
  }
  return true;
};
