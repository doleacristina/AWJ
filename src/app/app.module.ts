import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { UserService } from './user-profile/user.service';
import { RegisterService } from './registration/register.service';
import { IsLoggedIn } from './infrastructure/is-logged-in';
import { AttendanceService } from './attendance/attendance.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AttendanceComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    LoginService,
    UserService,
    RegisterService, 
    AttendanceService,
    IsLoggedIn
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
