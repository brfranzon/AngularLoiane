import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string;
  cursoAngular: boolean;
  urlImagem: string;
  valorInput: any;
  valorSalvo: any;
  isMouseOver: boolean = false;
  nome: string = "abc";
  pessoa: any = {
    nome: "Caetano",
    idade: 56,
    email: "caetano@gmail.com",
    status: {
      livre: true,
      data: "01.01.2002"
    }
  };
  nomedoCurso: string;
  valorModificado: number = 199;
  valorObtidoPeloPai: number;

  constructor() {
    this.url = 'www.google.com';
    this.cursoAngular = true;
    this.urlImagem = 'http://lorempixel.com/400/300/nature';
    this.nomedoCurso = "Angular";
  }

  getValor() {
    return 34;
  }

  BotaoClicado() {
    alert("botao clicado");
  }

  onKeyUp(e: KeyboardEvent) {
    this.valorInput = (<HTMLInputElement>e.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  MouseOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(ev) {
    this.valorObtidoPeloPai = ev.novoValor;
    console.log(ev.novoValor);
  }

}