import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Eventdetail } from './eventdetail';
import { GetadatService } from 'src/app/getadat.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

eventdetails:Eventdetail[]=[];
iseventFormOpen: boolean =false;
 constructor(private formbuider :FormBuilder, private http:HttpClient,private toastr: ToastrService
  , private dataService  : GetadatService
  ){}

  
  ngOnInit(): void {
    this.getdata()
   
  
   /*  throw new Error('Method not implemented.'); */
  }
  showform(){
    this.iseventFormOpen=!this.iseventFormOpen
  }
 eventDetail = new FormGroup({
  event_name:new FormControl(),
  event_date:new FormControl(),
  event_description:new FormControl(),
  event_incharge:new FormControl(),
  

 });
 getdata(){
  this.dataService.getEventDetail().subscribe(
    (response:Eventdetail[])=>{
      this.eventdetails=response
      console.log(response)
    }
  );

  
 }




  registerEvent(){
    console.log("trying to add data")
    const data =this.eventDetail.value;
    console.log(data);
    const eventurl ="http://localhost:3000/api/eventdetail";
    this.http.post(eventurl,data).subscribe(
      (response)=>{
        console.log(response);

        this.toastr.success("event added succesfully")
        this.eventDetail.reset({
        
        });
        this.iseventFormOpen=false;
      },
      (error)=>{
        console.log('event detailes unable to add from front end please Check',error)
      })
  }

}
