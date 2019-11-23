import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Auth} from "../../guards/auth";
import {AuthGuard} from '../../guards/auth.guard';
import {ExpressService} from '../../services/express.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  processing = false;
  previousUrl;

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
    this.noAuth();
  }

  noAuth(){
    if (this.authGuard.redirectUrl) {
      console.log('Authentification requise !', 'Vous devez vous connecter pour accéder à cette page.', 'error');
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }
  }

  // Create Login Form
  createForm() {
    this.formLogin = this.formBuilder.group({
      userMail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Submit
  onLogin(){

    this.processing = true;

    // variable for express
    const content = {
      action: 'tryConnect',
      userMail: this.formLogin.get('userMail').value,
      password: this.formLogin.get('password').value
    };

    // express request
    this.expressService.postExpress('login', content).subscribe((resp: Auth ) => {
      if (!resp.success) {
        this.processing = false;
        console.log('Connexion échouée', resp.message, 'error');
      } else {
        this.loginService.storeUserData(resp.token, resp.user);

        // redirection
        if (this.previousUrl) {
          this.router.navigate([this.previousUrl]);
        } else {
          this.router.navigate(['/user']);
        }
      }
    });

  }


/*
  // Create Login Form
  createForm() {
    this.formLogin = this.formBuilder.group({
      userMail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {

    this.processing = true;

    const usermail = this.formLogin.get('userMail').value;
    const password = this.formLogin.get('password').value;

    // Calls service to login user to the api rest
    this.loginService.login(usermail, password, (res) => {
      console.log(res)
    });
  }
*/


}
