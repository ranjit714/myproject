import { Component, OnInit } from '@angular/core';
import {RegName,RegPassword,RegContact,RegEmail} from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent implements OnInit {

  mycorses:string[]=["java","Python","Angular devoloper","mongodb","php"];

  namePatter=RegName;
  passwordPatter=RegPassword;
  contactPatter=RegContact;
  emailPatter=RegEmail;

  constructor() { }

  ngOnInit(): void {
  }
  getdata(val:any){
            console.log(val);
  }
}
