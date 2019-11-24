import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ExpressService} from "./express.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private expressService: ExpressService
  ) {
  }

  // Creation de l'action d'enregistrement
  register(userrole:string, usernom:string, userphone:number, usermail:string, password:string,

           cb){
    const content = {
      action: 'register',
      userRole:  userrole,
      userNom:   usernom,
      userPhone: userphone,
      userMail:  usermail,
      password:  password
    };
    this.expressService.postExpress('register', content).subscribe((res) => {
      return cb(res);
    });
  }

}
