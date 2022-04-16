import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpedentiureModel } from '../model/expenditure.model';
import { UserModel } from '../model/user.model';
import { SpendingService } from '../services/spending-service.service';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss'],
})
export class SpendingListComponent implements OnInit {

  spendings: ExpedentiureModel[] = [];
  sum: number;
  public listChanged$ = new BehaviorSubject<boolean>(false);

  constructor(private spendingService: SpendingService) { }

  ngOnInit(): void {
    this.spendingService.getSpendings().subscribe((data: UserModel[]) => {
      data.forEach(user => {
        this.spendings = user.spendings;
        this.listChanged$.next(true);
      })
    }
    );

    this.listChanged$.subscribe({
      next: (v) => this.sum = this.spendings.reduce((n, { amount }) => n + +amount, 0)
    })
  }


}
