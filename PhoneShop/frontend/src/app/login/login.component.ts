import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RegisterService} from "../util/service/register.service";
import {LoginService} from "../util/service/login.service";
import {User} from "../util/models/user.model";
import {GlobalUserStorageService} from "../util/service/global-storage.service";
import {Token} from "../util/models/token.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  success: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private location: Location,
              private loginService: LoginService, private localStorageService: GlobalUserStorageService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.userForm = this.fb.group({
      username: ['', {
        validators: [Validators.required]
      }],
      password: ['', Validators.required]
    });
  }

  get username(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  onLoginClick() {
    this.loginService.login(this.userForm.getRawValue()).subscribe((userToken) => {
      if(!userToken) {
        this.success = false;
      } else if ( userToken.token != null && userToken.user != null) {
        this.localStorageService.currentToken = userToken.token;
        this.localStorageService.currentUser = userToken.user;
        this.success = true;
        this.router.navigate(['plp']);
      }
    });
  }

  onCancelClick() {
    this.location.back();
  }

  getErrorText(controlName: string): string {
    const control = this.userForm.get(controlName) as FormControl;
    return this.getErrorMessage(control, controlName);
  }

  private getErrorMessage(control: FormControl, controlName: string): string {
    let errorMessage = '';
    if (control.errors) {
      if (control.errors['required']) {
        errorMessage = 'Field is required';
        return errorMessage;
      }
    }
  }

}
