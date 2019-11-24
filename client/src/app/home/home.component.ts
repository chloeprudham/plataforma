import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {BookingService} from "../services/booking.service";
import {ExpressService} from "../services/express.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  processing = false;
  formBooking: FormGroup;

  title: string = 'Booking AGM';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(

    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private expressService: ExpressService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  // Create Register Form
  createForm(){
    this.formBooking = this.formBuilder.group({
      bookDepart: ['', Validators.required],
      bookArrive: ['', Validators.required],
      bookDate: ['', Validators.required],
      bookHeure: ['', Validators.required],
      bookPassager: ['', Validators.required],
      bookBagage: ['', Validators.required]
    });
  }

  onBooking() {
    const bookdepart = this.formBooking.get('bookDepart').value;
    const bookarrive = this.formBooking.get('bookArrive').value;
    const bookdate = this.formBooking.get('bookDate').value;
    const bookheure = this.formBooking.get('bookHeure').value;
    const bookpassager = this.formBooking.get('bookPassager').value;
    const bookbagage = this.formBooking.get('bookBagage').value;

    // Calls service to login user to the api rest
    this.bookingService.booking(bookdepart, bookarrive, bookdate, bookheure, bookpassager, bookbagage, (res) => {
      console.log(res)
    });

  }
}
