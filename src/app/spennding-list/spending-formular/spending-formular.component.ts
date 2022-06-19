import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SpendingService } from 'src/app/services/spending-service.service';


@Component({
  selector: 'app-spending-formular',
  templateUrl: './spending-formular.component.html',
  styleUrls: ['./spending-formular.component.scss']
})
export class SpendingFormularComponent implements OnInit {

  form = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(''),
  });  


  constructor(private spendingService: SpendingService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submitted');
    console.log(this.form.value)

    this.spendingService.addSpending(this.form.value);

  }

}
