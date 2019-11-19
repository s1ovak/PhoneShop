import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {GlobalUserStorageService} from "../service/global-storage.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: GlobalUserStorageService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.storageService.currentUser;
    const token = this.storageService.currentToken;
    if (currentUser && token && token.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.token}`
        }
      });
    }
    else {
      this.storageService.currentUser=null;
      this.storageService.currentToken=null;
      /*if(!this.router.url.includes("register")) {
        this.router.navigate(['register']);
      }*/
    }

    return next.handle(request);
  }
}
