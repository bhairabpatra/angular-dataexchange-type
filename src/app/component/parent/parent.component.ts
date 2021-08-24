import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit   {

  data =0;
  constructor() { }



  changeFromParent(){
       this.data ++
  }

  ngOnInit(): void {
    console.log("----ngOnInit-----");
  }

}

