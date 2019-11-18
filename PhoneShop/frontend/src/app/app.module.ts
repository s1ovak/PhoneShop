import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ToolbarModule} from "./toolbar/toolbar.module";
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule,
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import {RegisterService} from "./util/service/register.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtModule} from "@auth0/angular-jwt";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
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
    MatInputModule
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
