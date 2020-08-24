import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service'


@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos = ["Angular", "C++", "Python"];

    constructor(private _logServise: LogService) {
        this._logServise.consoleLog('teste');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this._logServise.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

}