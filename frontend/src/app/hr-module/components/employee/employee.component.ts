import { Component, OnInit } from '@angular/core';
import { GetadatService } from 'src/app/getadat.service';
import { employee } from './employee';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  isformOpen: boolean=false
  
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

    constructor(private getdata:GetadatService,private http: HttpClient){

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
registerEmployee(){
  this.isformOpen=!this.isformOpen;
 
 
  console.log(this.isformOpen)
}
  
  showChange(event:any){
    const data =event.target.files[0];
    console.log(data)
    console.log("fileUploaded")


  }

  // FORM SECTION
  registerForm = new FormGroup({
   employeeid:new FormControl(),
   employee_fnam :new FormControl(),
   employee_lname:new FormControl(),
   employee_mname :new FormControl(),
   designation :new FormControl(),
    email:new FormControl(),
   status :new FormControl(),
    empdob:new FormControl(),
   emp_joining_date :new FormControl(),
    phoneno:new FormControl(),
    

  });

  onRegisteration(){
    const data = this.registerForm.value;
    console.log(data);
    const url="http://localhost:3000/api/employeedeta"
    this.http.post(url,data).subscribe(
      (response)=>{
      console.log(response);
    },
    (error)=>{
      console.log('registration fiaoled from front end please check', error);
    });

  }

}