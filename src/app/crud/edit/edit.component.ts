import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataservService } from 'src/app/shared/services/dataserv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

     id:number=0;
     empobj:any;

  constructor(private _ActRoute:ActivatedRoute,private _empser:DataservService,private _router:Router) { }

  ngOnInit(): void {
    this._ActRoute.params.subscribe((para)=>{
      this.id = Number(para['id']);
      console.log(this.id);
    })
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
     // console.log(this.empobj);
    })
  }
  addData(val:any){
    const empobj={
      id:this.id,
      name:val.name,
      post:val.post,
      gender:val.gender,
      salary:val.salary
    }
    this._empser.upDateRecord(empobj).subscribe(()=>{
      alert(`record added sucessfully with id: ${this.id}`);
      this._router.navigate(['/crud']);
    })
  }
}
