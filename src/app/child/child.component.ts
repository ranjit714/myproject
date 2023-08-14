import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  

  counterVal:number=0;
  counterMsg:string='';

  @Input() parentData:any;
  @Output() eventData= new EventEmitter ;

  constructor() { }

  ngOnInit(): void {
  }

  getData(val:any){

    this.eventData.emit(val);
    console.log(val);

  }
  couterincret(){
    this.counterVal=this.counterVal+1;
    this.counterMsg="couter value is:"+this.counterVal;
  }
  couterDecrement(){
    this.counterVal=this.counterVal-1;
    this.counterMsg="couter value is:"+this.counterVal;
  }
  
}

