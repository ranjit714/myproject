import { Component, OnInit } from '@angular/core';
import {employearr} from '../shared/constant/constant';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  greeting:string="Welcome you all thise angular session";

  emp={
    id:101,
    name:"ranjit",
    post:"DM",
    salary:80000
  }

  date=new Date()

  student=employearr;

  constructor() { }

  ngOnInit(): void {
  }

}
