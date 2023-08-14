import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../shared/service/myservice.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent implements OnInit {
 
  empArray:any;
  constructor(private _empDatd:MyserviceService) { }           //depandancy injection

  ngOnInit(): void {
      this.empArray=this._empDatd.DisplayEmpData()
  }

}
