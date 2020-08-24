import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  livro: any = {
    nome: 'Código De Processo Civil Comentado',
    editora: 'Revista dos Tribunais; Edição: Nova Ediçãoª (31 de janeiro de 2020)',
    idioma: 'Português',
    peso: 2.32233242,
    nota: 4.5,
    url: 'www.google.com'
  }

  filtro: string;
  livros: string[] = ["Angular", "C++", "Phyton", "Java", "Java2", "1Angular", "2++", "32Phyton", "J3131ava", "45Java2"];


  OnAddCurso(value: string) {
    this.livros.push(value);
    console.log("kakaka!", this.filtro);
  }

  obterCursos() {
    /**
     * Filter array items based on search criteria (query -> args)
     */
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    else {

      return this.livros.filter(
        (el) => {
          if (el.toLowerCase().indexOf(this.filtro.toString().toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        });
    }

  }

}
