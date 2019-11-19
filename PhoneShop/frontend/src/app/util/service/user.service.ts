import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {GlobalUserStorageService} from "./global-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private localStorageService: GlobalUserStorageService) {}

  logout() {
    this.localStorageService.currentUser = null;
    this.localStorageService.currentToken = null;
  }

  isAuthenticated(): boolean {
    const token = this.localStorageService.currentToken;
    if(!token || token.token == null) {
      return false;
    } else return true;
  }
}
