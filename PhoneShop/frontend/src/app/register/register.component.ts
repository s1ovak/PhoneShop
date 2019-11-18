import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {RegisterService} from "../util/service/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private location: Location,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm(){
    this.userForm = this.fb.group({
      username: ['', {
        validators: [Validators.required]
      }],
      password: ['', Validators.required],
      email: ['', {
        validators: [Validators.email]
      }]
    });
  }

  get username(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  onRegisterClick() {
    this.registerService.register(this.userForm.getRawValue()).subscribe();
    // this.onCancelClick();
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
      if (control.errors['email']) {
        errorMessage = 'Incorrect email';
        return errorMessage;
      }
    }
  }
}
