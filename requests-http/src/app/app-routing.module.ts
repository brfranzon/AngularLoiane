import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
{path: "", pathMatch: "full", redirectTo: 'home'},
{path: 'home', component: HomeComponent},
{path: 'cursos', component: CursosListaComponent},
{path: 'cursos/novo', component: CursosFormComponent},
{path: 'cursos/editar/:id', component: CursosFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
