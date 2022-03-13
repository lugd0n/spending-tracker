import { Injectable } from '@angular/core';
import { ExpedentiureModel } from '../model/expenditure.model';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {


  private spendings: ExpedentiureModel[] = [
    { name: "rent", amount: 500 },
    { name: "insurance", amount: 200 },
    { name: "holiday", amount: 300 }];

  constructor() { }


  public getSpendings(): ExpedentiureModel[] {
    return this.spendings;
  }

  public getTotalSpending(): number {

    return this.spendings.reduce((n, { amount }) => n + amount, 0);
  }
}
