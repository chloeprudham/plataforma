import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){ }

  canActivate(){
    if (this.loginService.loggedIn()){
      this.router.navigate(['/user']);
      return false;
    } else {
      return true;
    }
  }


  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }*/


}
