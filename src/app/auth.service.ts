import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private httpClient: HttpClient, private apiService: ApiService) { }

  public login(authFg) {
    return this.apiService.postLogin(authFg);
  }
  public methodToken() {
    return 'Bearer';
  }
  public getToken() {
    return '1A2b3C4d5E6f7G8h9IAgBKClD';
  }
}
