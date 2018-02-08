import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../infrastructure/user';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User = new User();
  error : String = null;
  @ViewChild('registrationForm') registrationForm;


  constructor(private registerService : RegisterService, private router : Router) { }

  ngOnInit() {
  }

  Register() {
    try{
      this.error = null;
      if(!this.registrationForm.valid) {
        throw "Please complete mandatory fields (*)";
      };
      this.registerService.Register(this.user);
      this.router.navigate(['login']);
    } catch(err) {
      this.error = err;
    }
  }

}
