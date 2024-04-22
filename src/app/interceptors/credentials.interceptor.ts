import type { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    withCredentials: true,
  })
  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      let errorMessage: string = ''
      if (e.status === 500) {
        errorMessage = 'Error 500'
      }
      //.....
      return throwError(() => new Error(errorMessage))
    })
  );
};
