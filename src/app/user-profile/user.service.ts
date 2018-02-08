import { Injectable } from '@angular/core';
import { User } from '../infrastructure/user';

@Injectable()
export class UserService {

  public user : User = null;
  public isLoggedIn : boolean = false;

  constructor() { }

}
