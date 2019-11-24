import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ExpressService} from "./express.service";


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient,
    private expressService: ExpressService
  ) {
  }

  booking(bookdepart:string, bookarrive:string, bookdate:string, bookheure:string, bookpassager:number, bookbagage:number, cb){
    const content = {
      action: 'voiture',
      bookDepart: bookdepart,
      bookArrive: bookarrive,
      bookDate: bookdate,
      bookHeure: bookheure,
      bookPassager: bookpassager,
      bookBagage: bookbagage
    };

    this.expressService.postExpress('voiture', content).subscribe((res) => {
      return cb(res);
    });
  }
}
