import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;
  error : boolean = false;

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }

  Login() {
    this.error = false;
    let exists = this.loginService.Login(this.username, this.password);
    if(exists) this.router.navigate(['']);
    else this.error = true;
  }

}
