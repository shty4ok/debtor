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
    return this.httpClient.get<Debts>(`${this.apiUrl}api/debts`);
  }
  public postData(dataSend: Debts): Observable<Debts> {
    return this.httpClient.post<Debts>(`${this.apiUrl}api/debts`, dataSend, {responseType: 'json'});
  }
  public deleteData(idItem: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiUrl}api/debts/${idItem}`);
  }
}
