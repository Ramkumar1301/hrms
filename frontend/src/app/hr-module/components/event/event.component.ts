import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Eventdetail } from './eventdetail';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

eventdetails:Eventdetail[]=[];
 constructor(private formbuider :FormBuilder, private http:HttpClient,private toastr: ToastrService
  ){}
  ngOnInit(): void {
  
    throw new Error('Method not implemented.');
  }
 eventDetail = new FormGroup({
  eventName:new FormControl(),
  eventdate:new FormControl(),
  eventDescription:new FormControl(),
  eventIncharge:new FormControl(),

 });

  registerEvent(){
    const data =this.eventDetail.value;
    console.log(data);
    const url ="http://localhost:3000/api/eventdetail";
    this.http.post(url,data).subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success("event added succesfully")
      },
      (error)=>{
        console.log('event detailes unable to add from front end please Checkj',error)
      })
  }

}
