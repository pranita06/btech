import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DetailslistComponent } from './detailslist/detailslist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MapComponent } from './map/map.component';
import { PuneComponent } from './pune/pune.component';
import { KaradComponent } from './karad/karad.component';
import { BeedComponent } from './beed/beed.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { KolhapurComponent } from './kolhapur/kolhapur.component';
import { NashikComponent } from './nashik/nashik.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'users', component: DetailslistComponent },
  { path: 'maps',  component: MapComponent },
  { path: 'pune', component:PuneComponent },
  { path: 'karad', component:KaradComponent },
  { path: 'beed', component:BeedComponent },
  { path: 'mumbai', component:MumbaiComponent },
  { path: 'kolhapur', component:KolhapurComponent },
  { path: 'nashik', component:NashikComponent },
  { path: 'images', component:ImagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
