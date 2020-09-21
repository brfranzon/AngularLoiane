import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosService } from '../cursos/cursos.service';

@NgModule({
  declarations: [CursosListaComponent],
  imports: [CommonModule],
  providers: [CursosService]
})
export class CursosModule { }