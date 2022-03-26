import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpedentiureModel } from '../model/expenditure.model';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {
  API_URL = 'http://localhost:3000/user';


  constructor(private http: HttpClient) { }

  public getSpendings() {
    console.log("get spendings at", this.API_URL);
    return this.http.get<any>(this.API_URL);

  }

}
