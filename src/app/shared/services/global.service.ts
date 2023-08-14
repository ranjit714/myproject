import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Base_Url } from 'src/app/shared/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private options={ headers:new HttpHeaders().set('Content-Type','application/json') }

  constructor(private _http:HttpClient) {}

  formantError(error:any){
    return throwError(error.massage || 'Internal Server Error');
  }
  //get request
  get(path:string):Observable<any>{

    return this._http.get(Base_Url+path).pipe(catchError(this.formantError))   //http://localhost:3000/
  }
  // get single Record
  getSingleId(path:String,id:any){
    const url= `${Base_Url + path}/${id}`;
    this._http.get(url).pipe(catchError(this.formantError))
  }
  // edit Record
  updateRecord(path:string,id:any,body:{}){
    const url=`${Base_Url + path}/${id}`;
    this._http.put(url,body).pipe(catchError(this.formantError))
  }
  // add record
  addData(path:string,body:{}){
    this._http.post(Base_Url+path,body).pipe(catchError(this.formantError))
  }
  // delete Record
  deleteRecord(path:string,id:number){
    const url=`${Base_Url + path}/${id}`;
    this._http.delete(url).pipe(catchError(this.formantError))
  }
  signIn(user:any){
         sessionStorage.setItem('user',user);
  }
  signOut(){
    sessionStorage.removeItem('user');
  }
}
