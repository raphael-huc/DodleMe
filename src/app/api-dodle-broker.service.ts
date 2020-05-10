import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDodleBrokerService {

  private url = 'http://localhost:3000/api/test';

  constructor(private httpClient: HttpClient) { }

  public test(): Observable<string> {
    return this.httpClient.get<string>(this.url);
  }
}
