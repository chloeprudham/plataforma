import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

// guest
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./guest/login/login.component";
import { RegisterComponent } from "./guest/register/register.component";
// adm
import {AdmComponent} from "./adm/adm/adm.component";
// user
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {UserRequestComponent} from "./user/user-request/user-request.component";
import {VoucherComponent} from "./user/voucher/voucher.component";
// transporteur
import {ChauffeurComponent} from "./transporteur/chauffeur/chauffeur.component";
import {DocumentComponent} from "./transporteur/document/document.component";
import {DriverAccountComponent} from "./transporteur/driver-account/driver-account.component";
import {VoituresComponent} from "./transporteur/voitures/voitures.component";
import {TransporteurProfileComponent} from "./transporteur/transporteur-profile/transporteur-profile.component";
import {MeetingPointComponent} from "./transporteur/meeting-point/meeting-point.component";
import {ReservationComponent} from "./transporteur/reservation/reservation.component";


const routes: Routes = [
  // other
  { path: '', component: HomeComponent, canActivate: [NoAuthGuard]},
  // adm
  { path: 'adm', component: AdmComponent, canActivate: [NoAuthGuard]},
  // guest
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  // user
  { path: 'user', component: UserProfileComponent, canActivate: [NoAuthGuard] },
  { path: 'request', component: UserRequestComponent, canActivate: [NoAuthGuard] },
  { path:'voucher', component: VoucherComponent, canActivate: [NoAuthGuard] },
  // transporteur
  { path: 'chauffeur', component: ChauffeurComponent, canActivate: [NoAuthGuard] },
  { path: 'document', component: DocumentComponent, canActivate: [NoAuthGuard] },
  { path: 'driver', component: DriverAccountComponent, canActivate: [NoAuthGuard] },
  { path: 'meeting', component: MeetingPointComponent, canActivate: [NoAuthGuard] },
  { path: 'reservation', component: ReservationComponent, canActivate: [NoAuthGuard] },
  { path: 'voitures', component: VoituresComponent, canActivate: [NoAuthGuard] },
  { path: 'transporteur', component: TransporteurProfileComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
