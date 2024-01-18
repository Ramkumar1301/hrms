import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';
import { EventComponent } from './components/event/event.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { HrModuleRoutingModule } from './hr-module-routing.module';




@NgModule({
  declarations: [
   

    DashboardComponent,
    EmployeeComponent,
    TaskBoardComponent,
    LeaveComponent,
    EventComponent,
    BirthdayComponent,
    NotificationComponent,


  ],
  imports: [
    CommonModule,
    HrModuleRoutingModule,
    ReactiveFormsModule,
  
   
  ]
})
export class HrModuleModule { }
