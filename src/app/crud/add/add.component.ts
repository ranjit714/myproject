import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservService } from 'src/app/shared/services/dataserv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _empSer:DataservService,private _router:Router) { }

  ngOnInit(): void {
    
  }
  addData( val:any){
      const empObj={
        name:val.name,
        post:val.post,
        gender:val.gender,
        salary:val.salary
      }
      this._empSer.addRecord(empObj).subscribe(()=>{
        alert("Data added sucessfully");
      
        this._router.navigate(['/crud'])
      })
    
  }
  }



