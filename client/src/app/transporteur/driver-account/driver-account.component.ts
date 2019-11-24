import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { ExpressService } from '../../services/express.service';
import { DriverCompteService } from "../../services/driver-compte.service";
import { Auth} from "../../guards/auth";


@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {

  processing = false;
  formCompte: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private driverCompteService: DriverCompteService,
    private expressService: ExpressService,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  // Create Compte Form
  createForm() {
    this.formCompte = this.formBuilder.group({
      userEnterprise: ['', Validators],
      userNom: ['', Validators.required],
      userRue: ['', Validators.required],
      userVille: ['', Validators.required],
      userProvence: ['', Validators.required],
      userPay: ['', Validators.required],
      userPhone: ['', Validators.required],
      userMail: ['', Validators.required],
      userComptable: ['', Validators],
      userPaypal: ['', Validators],
      userCompte: ['', Validators.required],
      userIban: ['', Validators.required],
      userBanque: ['', Validators.required],
      userTva: ['', Validators],
      userCoc: ['', Validators]
    });
  }

  onCompte() {
    const userenterprise = this.formCompte.get('userEnterprise').value;
    const usernom = this.formCompte.get('userNom').value;
    const userrue = this.formCompte.get('userRue').value;
    const userville = this.formCompte.get('userVille').value;
    const userprovence = this.formCompte.get('userProvence').value;
    const userpay = this.formCompte.get('userPay').value;
    const userphone = this.formCompte.get('userPhone').value;
    const usermail = this.formCompte.get('userMail').value;
    const usercomptable = this.formCompte.get('userComptable').value;
    const userpaypal = this.formCompte.get('userPaypal').value;
    const usercompte = this.formCompte.get('userCompte').value;
    const useriban = this.formCompte.get('userIban').value;
    const userbanque = this.formCompte.get('userBanque').value;
    const usertva = this.formCompte.get('userTva').value;
    const usercoc = this.formCompte.get('userCoc').value;
  }


}
