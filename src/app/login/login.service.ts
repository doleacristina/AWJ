import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../infrastructure/user';
import { UserService } from '../user-profile/user.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private users : User[];

  constructor(private userService : UserService) { }

  Login(username : string, password : string) : boolean {
    let users : User[] = environment.Users.filter((value, index) => value.Username == username && value.Password == password);
    if(users.length > 0) { 
      this.userService.isLoggedIn = true;
      this.userService.user = users[0];
    }

    return users.length > 0;
  }

  Logout() {
    this.userService.isLoggedIn = false;
    this.userService.user = null;
  }

}
