import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatSelectModule, MatSortModule, MatTableModule
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
import {ProductService} from "./util/service/product.service";
import { ProductComponent } from './product/product.component';
import { LastViewedComponent } from './last-viewed/last-viewed.component';
import { CartComponent } from './cart/cart.component';
import {CartService} from "./util/service/guards/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PlpComponent,
    ProductComponent,
    LastViewedComponent,
    CartComponent
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
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    LoginGuardService,
    AuthGuardService,
    ProductService,
    CartService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
