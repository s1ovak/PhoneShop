import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../user.service";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(public userService: UserService, public router: Router) {
  }

  canActivate(): boolean {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['plp']);
      return false;
    }
    return true;
  }
}
