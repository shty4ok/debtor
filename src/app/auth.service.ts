import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authResData = '';
  constructor(private router: Router, private httpClient: HttpClient, private apiService: ApiService) { }

  public login(authFg) {
    this.apiService.postLogin(authFg).subscribe(authRes => {
      this.authResData = authRes;
    });
  }
  public getToken() {
    console.dir(this.authResData);
    if (this.authResData !== null) {
      console.log('authRes !== null' + this.authResData);
      this.router.navigateByUrl(`main`);
      return this.authResData;
    } else {
      console.log('RES');
      this.router.navigateByUrl('');
    }
  }
}
