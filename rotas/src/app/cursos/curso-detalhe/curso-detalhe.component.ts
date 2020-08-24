import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
       private rota: ActivatedRoute,
       private cursosService: CursosService,
       // class para redirecionar rota
       private router: Router   
    ) 
    {
    // this.id = this.rota.snapshot.params['id'];
    console.log(this.rota);
    }

  ngOnInit(): void {
    this.inscricao = this.rota.params.subscribe(
      (params: any) => {

        this.id = this.rota.snapshot.params['id'];
        this.curso = this.cursosService.getCurso(this.id);

        //redirecionar rota em caso de curso vazio
        if(this.curso == null){
          this.router.navigate(['/cursonaoencontado']);
        }

      }
    );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }




}
