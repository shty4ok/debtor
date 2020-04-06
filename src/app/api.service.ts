import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Debts} from './data';
import { environment } from './environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  private behaviourSubject = new BehaviorSubject<Debts>(null);

  constructor(private httpClient: HttpClient) { }

  public postLogin(authFg): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}api/auth`, authFg, {responseType: 'json'});
  }
  public getCheckedData() {
    if (!this.behaviourSubject.value) {
      this.getData();
    }
    return this.behaviourSubject.asObservable();
  }
  private getData() {
    return this.httpClient.get<Debts>(`${this.apiUrl}api/debts`)
      .subscribe((data) => {
        this.behaviourSubject.next(data);
      });
  }
  public postData(dataSend: Debts): Observable<Debts> {
    return this.httpClient.post<Debts>(`${this.apiUrl}api/debts`, dataSend, {responseType: 'json'});
  }
  public deleteData(idItem: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiUrl}api/debts/${idItem}`);
  }
}
