import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AdduserComponent } from './adduser/adduser.component';
import { DetailslistComponent } from './detailslist/detailslist.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { ImagesComponent } from './images/images.component';
import { PuneComponent } from './pune/pune.component';
import { KaradComponent } from './karad/karad.component';
import { BeedComponent } from './beed/beed.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { KolhapurComponent } from './kolhapur/kolhapur.component';
import { NashikComponent } from './nashik/nashik.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    AdduserComponent,
    DetailslistComponent,
    MapComponent,
    ImagesComponent,
    PuneComponent,
    KaradComponent,
    BeedComponent,
    MumbaiComponent,
    KolhapurComponent,
    NashikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyAyJjgouIx49NEIAKdmnMy5uF9UIaiCvxQ',

      libraries: ['places']

    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})


export class AppModule { }