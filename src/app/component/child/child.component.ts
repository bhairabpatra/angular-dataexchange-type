import { Component, Input, OnInit ,OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

import { Customer } from '../../customer';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // message: string = "Hola Mundo!"
  cmessage = 'hai i view child message Mundo!';
  @Input() childMessage!:number;
  @Input()data!: string[];
  @Output() messageEvent = new EventEmitter<string>();

  customers:any  = [

    {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeFromChild(): void {
    this.childMessage -= 1;
  }
  ngOnChanges(changes: SimpleChanges): void {

        console.log("changes" + JSON.stringify(changes.childMessage));
        console.log("changes currentValue " + changes.childMessage.currentValue);
        console.log("changes previousValue" + changes.childMessage.previousValue);

  }

  sendMessage(){
    this.messageEvent.emit(this.customers)
  }




}
