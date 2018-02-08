import { Component } from '@angular/core';
import { UserService } from './user-profile/user.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService : UserService, private loginService : LoginService, private router : Router) {}

  Logout() {
    this.loginService.Logout();
    this.router.navigate(['login']);
  }


}
