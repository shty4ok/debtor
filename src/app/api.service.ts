import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DataDebtor} from "./data";
import { environment } from "./environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<DataDebtor> {
    return this.httpClient.get<DataDebtor>(`${this.apiUrl}/api/data`);
  }

  public postData(dataSend: DataDebtor): Observable<DataDebtor> {
    return this.httpClient.post<DataDebtor>(`${this.apiUrl}/api/data`, dataSend, {responseType: 'json'});
  }
}
