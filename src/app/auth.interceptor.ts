import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const authHeader = this.authService.getToken();
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `${this.authService.methodToken()} ${this.authService.getToken()}`)
    });
    return next.handle(authReq);
  }
}
