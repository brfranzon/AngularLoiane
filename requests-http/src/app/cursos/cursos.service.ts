import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators'
import { Curso } from '../cursos/curso';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos'

  constructor(private _http: HttpClient,
              private _router: Router,
              public imageURL: string) { }
  
  getList(){
    return this._http.get<Curso[]>(this.API).
    pipe(
      delay(0),
      tap(console.log)
    )
    
    ;
  }

  loadById(id: number){
    return this._http.get<Curso[]>(`${this.API}/${id}`).pipe(take(1));
  }

  createNewMitarbeiter(curso: Curso){
    return this._http.post(this.API, curso).pipe(take(1));
  }


  UpdateMitarbeiter(curso: Curso){
   return this._http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  Delete(curso: Curso){
    return this._http.delete(`${this.API}/${curso.id}`).pipe(take(1));
  }

}
