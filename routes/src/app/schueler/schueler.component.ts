import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { SchuelerModel } from '../shared/schueler-model';
import { SchuelerService } from '../shared/schueler.service'


@Component({
  selector: 'schueler',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {

  Allschueler: SchuelerModel[];
  Selectedschueler: any; // = new SchuelerModel();
  cols: any[];


  constructor(private _schulerService: SchuelerService) { }

  ngOnInit(): void {
    this.getAllSchueler(); 
  }

  /* get all Schueler */
  getAllSchueler(): void{
    this._schulerService.findAll().subscribe(
      data => {
        this.Allschueler = data;
      }
    );

  this.cols = [
    {field: 'Nachname', header: 'Nachname'},
    {field: 'Vorname', header: 'Vorname'},
    {field: 'Postleitzeil', header: 'Postleitzeil'},
    {field: 'Strasse', header: 'Strasse'}
    ]
 }

 OnSelectRow(rowData: any){
   this.Selectedschueler = rowData;
 }


}
