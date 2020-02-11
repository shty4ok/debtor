import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DataDebtor} from "./data";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<DataDebtor> {
    return this.httpClient.get<DataDebtor>(`http://localhost:3000/api/data`);
  }

  public postData(dataSend: DataDebtor): Observable<DataDebtor> {
    return this.httpClient.post<DataDebtor>(`http://localhost:3000/api/data`, dataSend, {responseType: 'json'});
  }
}
9
