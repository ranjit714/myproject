import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  mychoice:string='';

  iscond:boolean=true;
  isval: boolean=false;

  fruits:string[]=["Apple","mango","graps","banana","chiku"];

  myfruit:string="graps";

  states:string[]=["maharashtra","utthar pradesh","himachal pradesh","arunachal pradesh"];
  contry:string[]=["India","pakistan","shrilanka","rasia"];
  mix: string[]=["maharashtra","utthar pradesh","himachal pradesh","arunachal pradesh","India","pakistan","shrilanka","rasia"]


  str:string="maharashtra";
  cont:string="India";

  myStyle = {
    color:"red",
    backgroundColor:"gray",
    fontsize:"30px"
  }
  myClass = {
    "txt-danger":this.isval,
    "bgcolor":this.isval,
    "special":!this.isval,
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  showCountry(){
    this.iscond=true;
  }
  showStates(){
    this.iscond=false;
  }
  selectedItem(val:any){
    this.mychoice=val;
  }
}
