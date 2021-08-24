import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/customer';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';
import { ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit , AfterViewInit   {

  data =0;
  message!:string;

  cmessage = "i am view child";

  customers:any  = []
  constructor(private ds: DataService) { }

  @ViewChild(ChildComponent) child: any;


  ngAfterViewInit(): void {
    this.cmessage = this.child.cmessage
  }



  changeFromParent(){
       this.data ++
  }


  receiveMessage($event :any){
    this.customers = $event
  }

  selectedCustomer:Customer = new Customer();

  showDetails(customer:Customer) {
    this.selectedCustomer=customer
          console.log("this.selectedCustomer" +  JSON.stringify(this.selectedCustomer))
  }


  subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.ds.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

