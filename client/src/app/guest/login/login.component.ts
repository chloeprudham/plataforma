import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import {ExpressService} from '../../services/express.service';
import {Auth} from "../../guards/auth";
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  processing = false;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private expressService: ExpressService,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.createForm();
  }


  ngOnInit() {

  }

  // Create Login Form

  createForm() {
    this.formLogin = this.formBuilder.group({
      userMail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
   const usermail = this.formLogin.get('userMail').value;
   const password = this.formLogin.get('password').value;

    // Calls service to login user to the api rest
    this.loginService.login(usermail, password, (res) => {
      console.log(res)
    });

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
