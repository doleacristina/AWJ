import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './attendance.service';
import { Course } from '../infrastructure/course';
import { Laboratory } from '../infrastructure/laboratory';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  courses : Course[];
  laboratories : Laboratory[];

  constructor(public attendanceService : AttendanceService) { }

  ngOnInit() {
    this.laboratories = this.attendanceService.GetAvailableLaboratories();
    this.courses = this.attendanceService.GetAvailableCourses();
  }

}
