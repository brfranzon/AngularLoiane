import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SchuelerComponent } from './schueler/schueler.component';
import { SchuelerDetailComponent } from './schueler-detail/schueler-detail.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'schueler', component: SchuelerComponent},
  {path: 'schueler/:id', component: SchuelerDetailComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
