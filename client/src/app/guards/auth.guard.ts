import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";

import { LoginService } from "../services/login.service";

 const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  redirectUrl;

  constructor(
    private loginService: LoginService,
    private router: Router,
 ) {}

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.loginService.loggedIn()){

      const token = helper.decodeToken(this.loginService.getToken());
      const regexUrl = /^\/adm$|^\/cancelling$/;
      
      if (regexUrl.test(state.url)){
        if (token.admin === true){
          return true;
        } else {
          console.log('Acces interdit');
          this.router.navigate(['user']);
        }
      } else {
        return true;
      }

    }else {
      this.redirectUrl = state.url;
      this.router.navigate(['login']);
    }
 }



  /*
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
    }

  */



}
