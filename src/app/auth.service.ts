import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./environments/environments";
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor( private httpClient: HttpClient, private apiService: ApiService) { }

  public login(authFg): Observable<any> {
    return this.apiService.postlogin<any>(authFg).subscribe();
  }
  public methodToken() {
    return 'Bearer';
  }
  public getToken() {
    return '1A2b3C4d5E6f7G8h9IAgBKClD';
  }
}
