import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false;


  // emitir evento para o app module
  mostrarMenuEvent = new EventEmitter<boolean>();


  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'franzon' && usuario.senha === "12345") {
      this.usuarioAutenticado = true;
      // direcionar para home
      this.mostrarMenuEvent.emit(true); 
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEvent.emit(false); 
      console.log('Nao autenticado');
    }

  }



}
