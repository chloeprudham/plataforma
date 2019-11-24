import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ExpressService} from "./express.service";


@Injectable({
  providedIn: 'root'
})
export class DriverCompteService {

  constructor(
    private http: HttpClient,
    private expressService: ExpressService
  ) { }
}
