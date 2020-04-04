import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkLogin;
  constructor(private router: Router, private httpClient: HttpClient, private apiService: ApiService) { }

  public isLogin(logIN) {
    this.checkLogin = logIN;
  }
  public login(authFg) {
    return this.apiService.postLogin(authFg);
  }
  public methodToken() {
    return 'Bearer';
  }
  public setToken(token) {
    return localStorage.setItem('token', token);
  }
  public getToken() {
    return localStorage.getItem('token');
  }
}
