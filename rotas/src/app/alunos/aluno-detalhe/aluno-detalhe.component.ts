import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosServices: AlunosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.cursosServices.getAlunosID(this.id);
      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
