import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthGuard } from "./guards/auth.guard";


// guest
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./guest/login/login.component";
import { RegisterComponent } from "./guest/register/register.component";

// admin
import { AdmComponent } from "./adm/adm/adm.component";

// user
import { UserProfileComponent } from './user/user-profile/user-profile.component';

// transporteur
import {ChauffeurComponent} from "./transporteur/chauffeur/chauffeur.component";
import { VoituresComponent } from "./transporteur/voitures/voitures.component";
import { TransporteurProfileComponent } from './transporteur/transporteur-profile/transporteur-profile.component';

// services
import { ExpressService } from "./services/express.service";
import { LoginService } from "./services/login.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdmComponent,
    UserProfileComponent,
    ChauffeurComponent,
    VoituresComponent,
    TransporteurProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    ExpressService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
