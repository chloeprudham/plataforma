import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
/*import {JwtHelperService} from "@auth0/angular-jwt";
import swal from "sweetalert2";

import { LoginService } from "../services/login.service";

const helper = new JwtHelperService();*/

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

 // redirectUrl;

  constructor(
//    private loginService: LoginService,
  //  private router: Router
 ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
