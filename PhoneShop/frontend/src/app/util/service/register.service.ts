import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private REGISTER_URL = '/api/authentication/register';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.REGISTER_URL}`, user)
      .pipe(catchError((error: any) => throwError(error.error)));
  }
}
