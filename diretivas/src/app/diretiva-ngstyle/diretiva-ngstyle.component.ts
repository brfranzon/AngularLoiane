import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = true;
  fonteSize: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.ativo = !this.ativo;
  }
  Click() {
    this.ativo = !this.ativo;
  }
}
