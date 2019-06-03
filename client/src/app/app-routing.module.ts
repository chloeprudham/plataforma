import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NoAuthGuard} from './guards/no-auth.guard';

// guest
import { LoginComponent } from "./guest/login/login.component";
import { RegisterComponent } from "./guest/register/register.component";
// adm
import {AdmComponent} from "./adm/adm/adm.component";
// user

// transporteur
import {ChaufferComponent} from "./transporteur/chauffer/chauffer.component";
import {VoituresComponent} from "./transporteur/voitures/voitures.component";
import {TransporteurProfileComponent} from "./transporteur/transporteur-profile/transporteur-profile.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  // other
  { path: '', component: HomeComponent, canActivate: [NoAuthGuard]},
  // adm
  { path: 'adm', component: AdmComponent, canActivate: [NoAuthGuard]},
  // guest
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  // user
  // transporteur
  { path: 'chauffer', component: ChaufferComponent, canActivate: [NoAuthGuard] },
  { path: 'voitures', component: VoituresComponent, canActivate: [NoAuthGuard] },
  { path: 'transporteur', component: TransporteurProfileComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
