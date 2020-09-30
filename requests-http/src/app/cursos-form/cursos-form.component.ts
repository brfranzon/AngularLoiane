import { Location } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../cursos/curso';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
})
export class CursosFormComponent implements OnInit {
  @Input() myForm: FormGroup;
  @Output() formEvent = new EventEmitter<Curso>();;
  formID: number;

  constructor(
    public fb: FormBuilder,
    private _cursosService: CursosService,
    private _location: Location,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {

    this.myForm = this.fb.group({
      id: [null],
      employee_name: ['', [Validators.required]],
      employee_salary: ['', [Validators.required]],
      employee_age: ['', [Validators.required]],
      profile_image: ['', [Validators.required]],
    });

    // Ich muss die ID von der Route (URL) lesen
    this._route.params.subscribe((params: any) => {
      this.formID = params['id'];
      this._cursosService.loadById(this.formID).subscribe(
        //Logik das Formular zu ändern!
        (curso) => {
          this.UpdateForm(curso);
        }

      );
    });

    this.formEvent.emit(this.myForm.value);


  }

  onSubmit() {
  
    if(this.myForm.value.id){
      //update
      this._cursosService.UpdateMitarbeiter(this.myForm.value).subscribe(
        (sucess) => {
          console.log('OK! Update Mitarbeiter');
          window.close();
         this._location.back();
         //this._router.navigate(['/cursos'])
         
        }
      )
    
    }else{
      this._cursosService
      .createNewMitarbeiter(this.myForm.value)
      .subscribe((sucess) => {
        console.log('OK! Neuer Mitarbeiter');
        this._location.back();
      });
    }
   
         

  }

  UpdateForm(curso){
    this.myForm.patchValue({
      id: curso.id,
      employee_name: curso.employee_name,
      employee_salary: curso.employee_salary
    })
    
  }


  onCancel() {
    this.myForm.reset();
  }
}
