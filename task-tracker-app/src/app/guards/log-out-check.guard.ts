import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const logOutCheckGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  if (cookieService.check('token')) {
    router.navigate(['/main']);
    return false;
  }
  else {
    return true;
  }
};
