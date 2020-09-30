import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identity, Observable, Subscription } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})
export class CursosListaComponent implements OnInit {

 // cursos: Curso[];
 cursos$: Observable<Curso[]>;
 sub: Subscription;
 
 constructor(private _cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  ngOnInit(): void {
  //  this._cursosService.getList().
  //subscribe(
  //    data=>{this.cursos = data},
  //     error => {console.log(error)}      
  //   );
  this.cursos$ = this._cursosService.getList();
  }

  Add(){
   this.router.navigate(['/cursos/novo']);
  }

  Edit(id: number){
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/cursos/editar`, id], {relativeTo: this.route})
    );
       
  window.open(url,  "_blank", "toolbar = yes, menubar = visible, scrollbars = yes,resizable=yes, width=700,height=800");
   
    }
    //this.router.navigate(['/cursos/editar', id], {relativeTo: this.route});
  
  onDelete(curso){
   // this.deleteModalRef = this.modalService.show(this.v_deleleModal, {class: 'modal-sm'});
   this._cursosService.Delete(curso).subscribe(

    success => {
      
      console.log('Deleted....')
      this.cursos$ = this._cursosService.getList();

    }

   );

  }

  ngOnDestroy() {

  }


}
