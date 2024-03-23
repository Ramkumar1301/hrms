import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertdataService {
  private APIURL = "http://localhost:3000/api/insertData"
  private ADDEMPLOYEEURL ="http://localhost:3000/api/employeedata"

  constructor(private http:HttpClient) { }
   
  insertData(data:any):Observable<any>{
    return this.http.post<any>(this.APIURL,data)

  }
  insertEmpolyeeData(data:any):Observable<any>{
    return this.http.post<any>(this.ADDEMPLOYEEURL,data)
  }


}
