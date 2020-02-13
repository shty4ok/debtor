import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor( private httpClient: HttpClient) { }

  public login(authFg): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}api/auth`, authFg, {responseType: 'json'});
  }
  public methodToken() {
    return 'Bearer';
  }
  public getToken() {
    return '1A2b3C4d5E6f7G8h9IAgBKClD';
  }
}
