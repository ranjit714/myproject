import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uId:string='';
  uPass:string='';

  userArray:any[]=[];
  constructor( private _globlserv:GlobalService,private _router:Router) { }

  ngOnInit(): void {
    this._globlserv.signOut();
  }
  getData(){
    this._globlserv.get("users").subscribe((res)=>{
      this.userArray=res;
      const Data=this.userArray.filter((items:any)=>{
         return(items.user===this.uId) && (items.password===this.uPass)
        })

       // console.log(Data);
        if(Data){
                  this._globlserv.signIn(this.uId);
                  this._router.navigate(['databinding']);
                  
        }else{
          alert("wrong userId and Password");
          this.uId="";
          this.uPass="";
        }
      //  console.log(this.userArray);
    })
   // console.log;(`${this.uId} And ${this.uPass}`);
  }

}
