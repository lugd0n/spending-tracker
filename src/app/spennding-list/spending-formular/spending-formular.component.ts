import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-spending-formular',
  templateUrl: './spending-formular.component.html',
  styleUrls: ['./spending-formular.component.scss']
})
export class SpendingFormularComponent implements OnInit {

  @Input() addsItem: boolean = false;


  form = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(''),
  });  


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('submitted');
    console.log(this.form.value)
  }

}
