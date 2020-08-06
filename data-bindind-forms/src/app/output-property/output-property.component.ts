import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number;
  @Output() mudouValor = new EventEmitter();


  Incrementa(){
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor
    })
    
  }

  Decrementa(){
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor
    })
    
  }

  constructor() {
    this.valor = 0;
  }

  ngOnInit(): void {
  }

}
