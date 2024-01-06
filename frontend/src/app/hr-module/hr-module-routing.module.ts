import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { LeaveComponent } from './components/leave/leave.component';
import { EventComponent } from './components/event/event.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'taskboard', component: TaskBoardComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'event', component: EventComponent },
  { path: 'birthday', component: BirthdayComponent },
  {path:'notification', component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HrModuleRoutingModule {}
