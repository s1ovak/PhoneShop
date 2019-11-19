import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {UserTokenModel} from "../models/user-token.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGIN_URL = '/api/authentication/login';

  constructor(private http: HttpClient) {}

  login(user: User): Observable<UserTokenModel> {
    return this.http.post<UserTokenModel>(`${this.LOGIN_URL}`, user)
      .pipe(catchError((error: any) => throwError(error.error)));
  }
}
