import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    @ViewChild(ChildComponent)  counter: ChildComponent |undefined;
    message: string | undefined = '';

    incVal:any;

  mydata:any;
  childData:any;
  constructor() { }

  ngOnInit(): void {
  }
  getData(val:any){
        this.mydata = val;
        console.log(this.mydata);
  }
 incrent(){
           this.counter?.couterincret();
           this.message=this.counter?.counterMsg;
 }
 decrement(){
  this.counter?.couterDecrement();
  this.message=this.counter?.counterMsg;
 }

}
