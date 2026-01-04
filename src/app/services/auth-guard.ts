import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, filter, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    // Wait until auth state is determined (not undefined)
    filter((user) => user !== undefined),
    // Take only the first emission after filter
    take(1),
    // Map the user to navigation result
    map((user) => {
      if (user) {
        // User is authenticated, allow access
        return true;
      }

      // User is not authenticated, redirect to login
      return router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
    })
  );
};