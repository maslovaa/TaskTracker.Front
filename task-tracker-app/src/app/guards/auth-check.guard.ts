import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const authCheckGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  const cookieService = inject(CookieService);

  return accountService.isUserAuthenticated().pipe(
    map(data => {
      return data;
    }),
    catchError(() => {
      cookieService.delete('token');
      cookieService.delete('userName');
      cookieService.delete('email');
      cookieService.delete('surname');
      cookieService.delete('name');
      cookieService.delete('patronymic');
      router.navigate(['/authorization']);
      return of(false);
    })
  );
};
