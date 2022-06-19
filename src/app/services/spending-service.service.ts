import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ExpedentiureModel } from '../model/expenditure.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {
  API_URL = 'http://localhost:3000/user';


  sum: number;
  addsItem: boolean = false;
  public listChanged$ = new BehaviorSubject<boolean>(false);
  public spendings$ = new Subject<ExpedentiureModel[]>();
  public spendings: ExpedentiureModel[] = [];

  constructor(private http: HttpClient) { }

  public getSpendings() {
    console.log("get spendings at", this.API_URL);
    return this.http.get<any>(this.API_URL).subscribe((users: UserModel[]) =>{
      users.forEach(user =>{
        console.log(user.spendings);
        this.spendings = user.spendings
        this.spendings$.next(this.spendings.slice());

      },     
    )}
    );

  }
  public calculateSum(){
    this.spendings$.subscribe({
      next: (v) => this.sum = this.spendings.reduce((n, { amount }) => n + +amount, 0)
    });
  }

  public addSpending(expenditure: ExpedentiureModel){
    this.spendings.push(expenditure);
    this.spendings$.next(this.spendings.slice());    
  }
}
