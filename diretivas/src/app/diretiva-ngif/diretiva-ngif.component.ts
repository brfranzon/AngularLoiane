import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular", "Java", "C++"];
  mostrarCurso: boolean = false;
   
  constructor() { }

  ngOnInit(): void {
  }

  MostarCurso(){
    this.mostrarCurso =! this.mostrarCurso;
  }

}
