import { Component, OnInit } from '@angular/core';


import { CursosServices } from '../cursos/cursos.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements OnInit {

  cursos: string[] = [];


  constructor(private cursosServices: CursosServices) {
    // this.cursosServices = new CursosServices();
  }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
    //inicializar inscricao do evento para que possa saber de mudancas
    this.cursosServices.emitirCursoCriado.subscribe(

      (curso)=> {
        console.log(curso);
      }

    );

  }


}
