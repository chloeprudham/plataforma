import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from "../../guards/auth";
import { AuthGuard } from '../../guards/auth.guard';
import { ExpressService } from '../../services/express.service';
import { VoitureService } from "../../services/voiture.service";


@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  processing = false;
  formVoiture: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private voitureService: VoitureService,
    private expressService: ExpressService,
    private authGuard: AuthGuard,
    private router: Router)
  {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.formVoiture = this.formBuilder.group({
      autoType: ['',Validators.required],
      autoMark: ['', Validators.required],
      autoModel: ['', Validators.required],
      autoNdi: ['', Validators.required],
      autoClient: ['', Validators.required],
      autoPhoto: ['', Validators.required]
    });
  }

  onVoiture(){
    const autotype = this.formVoiture.get('autoType').value;
    const automark = this.formVoiture.get('autoMark').value;
    const automodel = this.formVoiture.get('autoModel').value;
    const autondi = this.formVoiture.get('autoNdi').value;
    const autoclient = this.formVoiture.get('autoClient').value;
    const autophoto = this.formVoiture.get('autoPhoto').value;

    this.voitureService.voiture(autotype, automark, automodel, autondi, autoclient, autophoto, (res) => {
      console.log(res)
    });
  }

}
