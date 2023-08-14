import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/employee.model';
import { empAPI } from 'src/app/shared/constant/constant';
@Injectable({
  providedIn: 'root'
})
export class DataservService {

  constructor( private _http: HttpClient) { }
   //get record from server db
  getData():Observable<IEmployee>{
    return this._http.get<IEmployee>(empAPI);
  }
  // delete record from server
  deleteRecord(id:any){
    const baseURL=`${empAPI}/${id}`;   //to get path http://localhost:3000/employee/id
    return this._http.delete(baseURL)
  }
    //add data data to database
     addRecord(emp:any){
      return this._http.post(empAPI,emp);
     }
     // get single record from id
     getSingleRecord(id:any){
       const baseURL=`${empAPI}/${id}`;   //to get path http://localhost:3000/employee/id
      return this._http.get(baseURL)
     }
     //update record
     upDateRecord(emp:any){
      const baseURL=`${empAPI}/${emp.id}`;
      return this._http.put(baseURL,emp);
     }
  }