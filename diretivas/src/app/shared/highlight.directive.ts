import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string;
  @Input('highlight') highleightColor: string;

  constructor() {
    this.defaultColor = "white";
    this.highleightColor = "blue";
  }
  

  @HostBinding('style.backgroundColor') backColor: string;

  @HostListener('mouseenter') private MouseOver() {
    this.backColor = this.highleightColor;
  }

  @HostListener('mouseleave') private MouseOut() {
    this.backColor = this.defaultColor;
  }

  ngOnInit(){
    this.backColor = this.defaultColor;
  }

}
