import { Injectable } from '@angular/core';
import { employearr } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  empData: any;

  constructor() {}
  DisplayEmpData(){
    return this.empData = [
      {id:'101',name:"Ranjit",contact:9028912009,gender:"Male",address:"hingoli",salary:20000,post:"fullstack devoloper"},
      {id:'102',name:"ankita",contact:9028912009,gender:"feMale",address:"pune",salary:12000,post:"linux system admin"},
      {id:'103',name:"naresh",contact:9028912009,gender:"Male",address:"hadapsar",salary:10000,post:"E-Mail marketing"},
      {id:'104',name:"anjali",contact:9028912009,gender:"feMale",address:"sangi",salary:70000,post:"softwere Engineer"},
      {id:'105',name:"anjali",contact:9028912009,gender:"feMale",address:"sangi",salary:60000,post:"softwere dovoloper"},
    ]
  }
}
