import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identity, Observable, Subscription } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

 // cursos: Curso[];
 cursos$: Observable<Curso[]>;
 sub: Subscription;

  constructor(private _cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  //  this._cursosService.getList().
  //subscribe(
  //    data=>{this.cursos = data},
  //     error => {console.log(error)}      
  //   );
  this.cursos$ = this._cursosService.getList();
  }

  Add(){
   this.router.navigate(['/cursos/novo']);
  }

  Edit(id: number){
    console.log(id);
    this.router.navigate(['/cursos/editar', id], {relativeTo: this.route});
  }

  ngOnDestroy() {

  }


}
