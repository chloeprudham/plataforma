import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AgmCoreModule } from "@agm/core";
import { AuthGuard } from "./guards/auth.guard";

// guest
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./guest/login/login.component";
import { RegisterComponent } from "./guest/register/register.component";
// admin
import { AdmComponent } from "./adm/adm/adm.component";
// user
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRequestComponent } from "./user/user-request/user-request.component";
import { VoucherComponent } from './user/voucher/voucher.component';
// transporteur
import { ChauffeurComponent } from "./transporteur/chauffeur/chauffeur.component";
import { DocumentComponent } from './transporteur/document/document.component';
import { DriverAccountComponent } from './transporteur/driver-account/driver-account.component';
import { MeetingPointComponent } from './transporteur/meeting-point/meeting-point.component';
import { ReservationComponent } from './transporteur/reservation/reservation.component';
import { VoituresComponent } from "./transporteur/voitures/voitures.component";
import { TransporteurProfileComponent } from './transporteur/transporteur-profile/transporteur-profile.component';
// services
import { ExpressService } from "./services/express.service";
import { LoginService } from "./services/login.service";
import { RegisterService } from "./services/register.service";
import { CancellingComponent } from './adm/cancelling/cancelling.component';


@NgModule({
  declarations: [
    AppComponent,
    AdmComponent,
    ChauffeurComponent,
    DocumentComponent,
    DriverAccountComponent,
    HomeComponent,
    LoginComponent,
    MeetingPointComponent,
    RegisterComponent,
    ReservationComponent,
    TransporteurProfileComponent,
    UserProfileComponent,
    UserRequestComponent,
    VoituresComponent,
    VoucherComponent,
    CancellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAudzkcy0c_GoDL2UhzGA9PzvVFo0MabgQ'
    })
  ],
  providers: [
    AuthGuard,
    ExpressService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
