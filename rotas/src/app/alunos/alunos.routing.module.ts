import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosComponent } from './alunos.component';

const alunosRoute: Routes = [
  {
    path: 'alunos', component: AlunosComponent, children: [
      { path: 'novo', component: AlunoFormularioComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormularioComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoute)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }