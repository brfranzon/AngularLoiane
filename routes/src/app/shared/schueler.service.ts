import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SchuelerModel  } from './schueler-model';
import { httpCrudMethods } from './http-crud-methods';

@Injectable({
  providedIn: 'root',
})

export class SchuelerService extends httpCrudMethods<SchuelerModel, number> {

   constructor(protected _http: HttpClient) { 
     super(_http,'http://localhost:3000/schueler');  
  }
}