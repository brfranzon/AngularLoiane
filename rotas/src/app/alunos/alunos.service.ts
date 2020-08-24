import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private alunos: any[] = [
    { id: 1, nome: "Gabriel", email: "aluno1@email.com" },
    { id: 2, nome: "Ana", email: "aluno2@email.com" },
    { id: 3, nome: "Pedro", email: "aluno3@email.com" },
    { id: 4, nome: "Joao", email: "aluno4@email.com" },
    { id: 5, nome: "Michael", email: "aluno5@email.com" },
    { id: 6, nome: "Carlos", email: "aluno6@email.com" },
    { id: 7, nome: "Valeria", email: "aluno7@email.com" },
    { id: 8, nome: "Gabriel", email: "aluno8@email.com" },
  ]

  getAlunos() {
    return this.alunos;
  }


  getAlunosID(id: number) {
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
