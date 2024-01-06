import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  public formwrapper = 'formstyle';

  constructor(private http: HttpClient) {
    
  }
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    MiddleName: new FormControl(''),
    lstName: new FormControl(''),
    emailid: new FormControl(''),
    mobileNo: new FormControl(''),
    password: new FormControl(''),
  });

 onSubmit(){
  const data =this.registerForm.value;
  console.log(data);
  const url='http://localhost:3000/user';

  this.http.post(url,data).subscribe(
    (response)=>{
      console.log('Registration successful!', response);
    },
    (error)=>{
      console.error('Registration failed:', error);
    });


 }
  
}
