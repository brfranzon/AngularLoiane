import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[fundoAmarelo]'
})

export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'green';
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'green');
  }

}
