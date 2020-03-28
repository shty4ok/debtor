import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authResData;
  constructor(private router: Router, private apiService: ApiService) { }

  public login(authFg) {
    this.apiService.postLogin(authFg).subscribe(authRes => {
      if (authRes.status) {
        this.router.navigateByUrl(`main`);
        this.authResData = authRes.token;
      } else {
        this.router.navigateByUrl('');
      }
    });
  }
  public getToken() {
    console.log(this.authResData);
    return this.authResData;
  }
}
