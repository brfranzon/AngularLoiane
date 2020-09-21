import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators'
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos'

  constructor(private _http: HttpClient) { }
  
  getList(){
    return this._http.get<Curso[]>(this.API).
    pipe(
      delay(0),
      tap(console.log)
    )
    
    ;
  }


  createNewMitarbeiter(curso: Curso){
    return this._http.post(this.API, curso).pipe(take(1));
  }


}
