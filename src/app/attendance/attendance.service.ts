import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user-profile/user.service';
import { Course } from '../infrastructure/course';
import { Laboratory } from '../infrastructure/laboratory';

@Injectable()
export class AttendanceService {

  constructor(private userService : UserService) { }

  GetAvailableCourses() : Course[] {
    return environment.Courses
    .filter((value, index) => value.Groups.indexOf(this.userService.user.ID) !== -1)
    .filter((value, index) => value.Dates.filter((date, index) => this.ParseDate(new Date()) == (date.Day + date.Hour)).length > 0);
  }

  GetAvailableLaboratories() :  Laboratory[] {
    return environment.Laboratories
    .filter((value, index) => value.Groups.indexOf(this.userService.user.ID) !== -1)
    .filter((value, index) => value.Dates.filter((date, index) => this.ParseDate(new Date()) == (date.Day + date.Hour)).length > 0);;
  }

  Attend(name : string) : void {
    let index = environment.Users.findIndex((value) => value.Username == this.userService.user.Username);
    if(index !== -1) { 
      environment.Users[index].Attendance = [name]; 
      this.userService.user.Attendance = [name];
    }
  }

  private ParseDate(date : Date) : string {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()] + date.getHours() + '00';
  }
}
