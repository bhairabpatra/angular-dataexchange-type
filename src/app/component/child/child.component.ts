import { Component, Input, OnInit ,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childMessage!:number;

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

}
