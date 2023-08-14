import { Component, OnInit } from '@angular/core';
/*import { ControlContainer, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegContact,RegEmail,RegName,RegPassword} from 'src/app/shared/constant/constant';*/

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent implements OnInit {

  /*emp:any;*/

  constructor() { }

  ngOnInit(): void {
          /*this.emp=new FormGroup({
             empName= new FormControl('',[Validators.required,Validators.pattern(RegName)]),
             empPassword= new FormControl('',[Validators.required, Validators.pattern(RegPassword)]),
             empContact= new FormControl('',[Validators.required, Validators.pattern(RegContact)]),
             empEmail= new FormControl('',[Validators.required, Validators.pattern(RegEmail)]),
             empPost= new FormControl('',[Validators.required]),
             empDob= new FormControl('',[Validators.required])
          })*/
  }

}
