import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
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
  subscription: Subscription;


  sum: number;
  addsItem: boolean = false;
  public listChanged$ = new BehaviorSubject<boolean>(false);
  public spendings$:BehaviorSubject<ExpedentiureModel[]>;
  


  constructor(private spendingService: SpendingService) { }

  ngOnInit(): void {

    this.subscription = this.spendingService.spendings$.subscribe(
      (spendings: ExpedentiureModel[]) => {
        this.spendings = spendings
        this.sum = this.spendingService.sum;
      }
      );

    this.spendingService.getSpendings();
    this.spendingService.calculateSum();

  }


  onAdd(){
    this.addsItem = !this.addsItem;
  }

  onDelete(){
    //todo
  }


}
