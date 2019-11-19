import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule, MatButtonModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import {RegisterService} from "./util/service/register.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtModule} from "@auth0/angular-jwt";
import {OverlayModule} from "@angular/cdk/overlay";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./util/service/login.service";
import {JwtInterceptor} from "./util/interceptors/jwt.interceptor";
import {UserService} from "./util/service/user.service";
import { PlpComponent } from './plp/plp.component';
import {LoginGuardService} from "./util/service/guards/login.guard.service";
import {AuthGuardService} from "./util/service/guards/auth.guard.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PlpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatDialogModule,
    MatAutocompleteModule,
    RouterModule,
    ToolbarModule,
    MatGridListModule,
    AppRoutingModule,
    ToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    LoginGuardService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
