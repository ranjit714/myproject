import { Component, OnInit } from '@angular/core';
import { DataservService } from 'src/app/shared/services/dataserv.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 p:number=1;
 searchkay:string='';
 order:string="name";
 reverse:boolean=true;
  empArr:any;

  dbError:any;

  constructor(private _dataSer:DataservService, private _globalSer:GlobalService) { }

  ngOnInit(): void {
    this.fetchData();
  }
    fetchData(){
   // this._dataSer.getData().subscribe((res)=>{
     // console.log(res);
     // this.empArr = res;

     this._globalSer.get("employee").subscribe((res)=>{
      console.log(res);
       this.empArr = res;
     },(error)=>{
             this.dbError=error;
     })

    
  }
  deleteData(id:any){
    if (confirm(`are you sure to delete record with id : ${id}`)){  // comfim is Event
    this._dataSer.deleteRecord(id).subscribe(()=>{
      alert("Record delited successfully");
      this.fetchData();                // data refresh automatically
      
    })
  }
}
changeOrder(){
  this.reverse=!this.reverse;
}
}
