import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class GetadatService {

  private url='http://localhost:3000/api/employeedetails'
  constructor(private http : HttpClient) { }

  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }


}