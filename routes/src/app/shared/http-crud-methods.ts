import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { httpCrudOperations } from './http-crud-interface';


export abstract class httpCrudMethods<T, ID> implements httpCrudOperations<T, ID> {
    constructor(
        protected _http: HttpClient,
        protected _base: string
      ) {}

  findAll(): Observable<T[]>{
    return this._http.get<T[]>(this._base).pipe(
      take(1)
    );
  }

  save(t: T): Observable<T>{
   return this._http.post<T>(this._base, t);
  }

  delete(id: ID): Observable<T>{
    return this._http.delete<T>(this._base + '/' + id);
  }

}