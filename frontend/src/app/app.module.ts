import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TimepassComponent } from './timepass/timepass.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HrModuleModule } from './hr-module/hr-module.module';
@NgModule({
  declarations: [
    AppComponent,
    TimepassComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HrModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

