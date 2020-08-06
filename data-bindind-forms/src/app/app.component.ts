import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-bindind-forms';

  valorInicial: number = 5;
  deletarCiclo: boolean = false;



  MudarValor() {
    this.valorInicial++;
  }

  DestruirCiclo() {
    this.deletarCiclo = true;
  }
}
