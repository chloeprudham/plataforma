import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { ExpressService } from '../../services/express.service';
import { RegisterService } from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  processing = false;
  formRegister: FormGroup;

  getRoles = [
    { id: '1', name: 'Passager' },
    { id: '2', name: 'Partenaire' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private expressService: ExpressService,
    private authGuard: AuthGuard,
    private router: Router
  ) {
    this.createForm();
  }
  ngOnInit() {
  }
  // Create Register Form
  createForm(){
    this.formRegister = this.formBuilder.group({
      userRole: ['',Validators.required],
      userNom: ['', Validators.required],
      userPhone: ['', Validators.required],
      userMail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister(){
    const userrole = this.formRegister.get('userRole').value;
    const usernom = this.formRegister.get('userNom').value;
    const userphone = this.formRegister.get('userPhone').value;
    const usermail = this.formRegister.get('userMail').value;
    const password = this.formRegister.get('password').value;

    // Calls service to register user to the api rest
    this.registerService.register(userrole, usernom, userphone, usermail, password, (res) => {
      console.log(res)
    });
  }
}
