import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Debts} from './data';
import { environment } from './environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public postLogin(authFg): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}api/auth`, authFg, {responseType: 'json'});
  }
  public getData(): Observable<Debts> {
    return this.httpClient.get<Debts>(`${this.apiUrl}api/data`);
  }
  public postData(dataSend: Debts): Observable<Debts> {
    return this.httpClient.post<Debts>(`${this.apiUrl}api/data`, dataSend, {responseType: 'json'});
  }
}
