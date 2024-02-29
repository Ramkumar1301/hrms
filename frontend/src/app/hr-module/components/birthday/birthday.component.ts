import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { GetadatService } from 'src/app/getadat.service';
import { employee } from '../employee/employee';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  birthday:employee[]=[];
  constructor(private http: HttpClientModule,private service:GetadatService){


  }
  ngOnInit(): void {
    this.birthdayData();
    throw new Error('Method not implemented.');
    
  }

  birthdayData(){
    this.service.getBirthDay().subscribe(
      (response:employee[])=>{
        this.birthday=response
        console.log(response)
      })
    
  }


}
