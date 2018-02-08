import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user-profile/user.service';

@Injectable()
export class IsLoggedIn implements CanActivate {

  constructor(private userService : UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(!this.userService.isLoggedIn) {
        this.router.navigate(['login']);
        return false;
      }

      return true;
  }
}
