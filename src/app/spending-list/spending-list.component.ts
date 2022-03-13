import { Component, OnInit } from '@angular/core';
import { ExpedentiureModel } from '../model/expenditure.model';
import { SpendingService } from '../services/spending-service.service';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss']
})
export class SpendingListComponent implements OnInit {

  spendings: ExpedentiureModel[] = [];
  sum: number;

  constructor(private spendingService: SpendingService) { }

  ngOnInit(): void {
    this.spendings = this.spendingService.getSpendings();
    this.sum = this.spendingService.getTotalSpending();
  }

}
