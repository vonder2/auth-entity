import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class PhoneBookInterceptor implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const clonedRequest = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: window.sessionStorage.getItem('phoneBookToken') || 'wrong token' // cannot be null
      }
    });

    // return next.handle(clonedRequest);
    return next.handle(clonedRequest).pipe(tap({
      next: res => res,
      error: err => {
        this.snackBar.open(err.error.message, 'OK', {duration: 10000});
        console.log(err);
        return err;
      }
    }));
  }
}
