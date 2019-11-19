import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../util/service/user.service";
import {GlobalUserStorageService} from "../util/service/global-storage.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService,
              private localStorageService: GlobalUserStorageService) {
  }

  ngOnInit() {
  }

  onLoginClick() {
    this.router.navigate(['login']);
  }

  onSignUpClick() {
    this.router.navigate(['register']);
  }

  onLogoutClick() {
    this.userService.logout();
    this.router.navigate(['plp']);
  }

  isAuthenticated(): Boolean {
    if (this.localStorageService.currentUser != null && this.localStorageService.currentToken != null) {
      return true;
    } else return false;
  }

  getUsername() : String {
    return this.localStorageService.currentUser.username;
  }
}
