import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: any;
  inscricao: Subscription;

  constructor(private CursosService: CursosService,
    private router: Router,
    private rota: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

    this.inscricao = this.rota.queryParams.subscribe(
      (query: any) => {
        this.pagina = query.pagina;
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


  ProximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { pagina: this.pagina } })
  }


}
