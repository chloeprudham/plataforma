import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from "./guards/auth.guard";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// guest
import { LoginComponent } from "./guest/login/login.component";
import { RegisterComponent } from "./guest/register/register.component";

// admin
import { AdmComponent } from "./adm/adm/adm.component";

// user
import { UserProfileComponent } from './user/user-profile/user-profile.component';

// transporteur
import { ChaufferComponent } from "./transporteur/chauffer/chauffer.component";
import { VoituresComponent } from "./transporteur/voitures/voitures.component";
import { TransporteurProfileComponent } from './transporteur/transporteur-profile/transporteur-profile.component';

// services
import { ExpressService } from "./services/express.service";
import { LoginService } from "./services/login.service";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdmComponent,
    UserProfileComponent,
    ChaufferComponent,
    VoituresComponent,
    TransporteurProfileComponent,
    HomeComponent

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
