import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module'
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './login/auth.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
