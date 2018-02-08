import { Injectable } from '@angular/core';
import { User } from '../infrastructure/user';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable()
export class RegisterService {

  constructor(private loginService : LoginService) { }

  Register(user : User) {
    if(environment.Users.filter((value, index) => value.Username == user.Username).length > 0) throw "Username already taken";
    if(environment.Users.filter((value, index) => value.Email == user.Email).length > 0) throw "Email already taken";
    environment.Users.push(user);
  }

}
