import { Component } from "@angular/core";


@Component({
    selector: 'meu-primeiro-component',
    template: `
    <p> Meu primeito component {{name}}! </p>
    `
})

export class MeuPrimeiroComponent {
    name: string = "Bruno";
}