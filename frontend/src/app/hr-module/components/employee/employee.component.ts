import { Component, OnInit } from '@angular/core';
import { GetadatService } from 'src/app/getadat.service';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  istableView : boolean=true
  empoloyees: employee[] = []; // Initialize users as an array of User
 /*
  user: User = {
    id: 0,
    name: '',
   last_name: '',
   username: '',
    // Add other properties if needed
  };

  constructor(private getadata:GetadatService) { }

  ngOnInit(): void {
    this.getadata.getUsers().subscribe(data => {
      this.users = data;
      console.log('Retrieved users:', this.users);
    });
  } */

    constructor(private getdata:GetadatService){

    }
    ngOnInit(): void {
      this.data();
      
    }
    data(){
      this.getdata.getUsers().subscribe(
        (response:employee[])=>{
          this.empoloyees=response
          console.log(response)
        }
      );
    }
  gridView(){
    this.istableView=false;
  }
tableView(){
    this.istableView=true;
  }

}