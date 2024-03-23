import { Component, OnInit } from '@angular/core';
import { GetadatService } from 'src/app/getadat.service';
import { employee } from './employee';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx'
import { InsertdataService } from '../Services/insertdata.service';

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

    constructor(private getdata:GetadatService,
      private insertemployee: InsertdataService,private http: HttpClient,private toastr: ToastrService ,private insertdataServices:InsertdataService){

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
  
  
readExcelFile(file: File) {
  const fileReader = new FileReader();

  fileReader.onload = (e: any) => {
    const data = e.target.result;

    if (data) {
      const workbook = XLSX.read(data, { type: 'binary' });

      // Assuming you want to read the first sheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      
      // Ensure that the worksheet is not undefined
      if (worksheet) {
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        console.log(jsonData);
        for (const row of jsonData){
          this.insertdataServices.insertData(row).subscribe(
            (response) => {
              console.log('Data inserted successfully:', response);
            },
            (error) => {
              console.error('Error inserting data:', error);
            }
          );
        }
      } else {
        console.error('Worksheet is undefined.');
      }
    } else {
      console.error('File data is undefined.');
    }
  };

  fileReader.readAsBinaryString(file);
}

showChange(event: any) {
  const file = event.target.files[0];

  if (file) {
    this.readExcelFile(file);
  } else {
    console.error('No file selected.');
  }
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
    //  console.log(this.registerForm.value);
     this.insertemployee.insertEmpolyeeData(this.registerForm.value).subscribe(
      (response)=>{
      console.log("service started sucessfully ",response);
     })
     this.toastr.success('Employee Register Successful');
     this.isformOpen=false;
     
   }


/*   onRegisteration(){
    const data = this.registerForm.value;
    console.log(data);
    const url="http://localhost:3000/api/employeedeta"
    this.http.post(url,data).subscribe(
      (response)=>{
      console.log(response);
      this.toastr.success('Employee Register Successful');
      this.registerForm.reset({
        
      });
      this.isformOpen=false;
    },
    (error)=>{
      console.log('registration fiaoled from front end please check', error);
    });

  } */

}