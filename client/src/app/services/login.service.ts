import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {ExpressService} from "./express.service";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authToken: string;
  private user: string;

  constructor(){
    this.authToken = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getToken(){
    return this.authToken;
  }

  storeUserData(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  public loggedIn(){
    /*const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);*/
    return !helper.isTokenExpired(this.authToken);
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  /*
  constructor(
    private http: HttpClient,
    private expressService: ExpressService,) { }

    login(usermail:string, password:string, cb){
    const content = {
      action: 'login',
      userMail: usermail,
      password: password
    };
    this.expressService.postExpress('login', content).subscribe((res) => {
      return cb(res);
    });
  }
  */

}


