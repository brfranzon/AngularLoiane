import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

export class CicloComponent implements OnInit, OnChanges, OnDestroy {


  @Input() valor: number = 10;

  constructor() {
    this.log("constructor");
  }


  ngOnInit(): void {
    this.log("OnInit");
  }


  ngOnChanges() {
    this.log("OnChanges");
  }

  ngDoCheck() {
    this.log("DoCheck");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy");
  }



  private log(hook: string) {
    console.log(hook);
  }
}
