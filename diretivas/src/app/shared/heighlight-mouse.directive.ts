import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[heighlightMouse]'
})

export class HeighlightMouseDirective {

  @HostListener('mouseenter') private meuEventoMouseOver() {
    //  this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.background = "yellow";
  }

  @HostListener('mouseout') private meuEventoMouseOut() {
    //  this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
    this.background = "blue";
  }

  @HostBinding('style.backgroundColor') background: string;

  constructor(
    //private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) {

  }



}
