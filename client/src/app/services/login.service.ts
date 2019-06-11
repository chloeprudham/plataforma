import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ExpressService} from "./express.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private expressService: ExpressService
  ) {
  }

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

}


