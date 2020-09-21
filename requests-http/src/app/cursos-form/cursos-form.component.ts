import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../cursos/curso';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css'],
})
export class CursosFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder,
              private _cursosService: CursosService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      id: ['', [Validators.required]],
      employee_name: ['', [Validators.required]],
      employee_salary: ['', [Validators.required]],
      employee_age: ['', [Validators.required]],
      profile_image: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this._cursosService.createNewMitarbeiter(this.myForm.value).subscribe();
  }

  onCancel() {
    this.myForm.reset();
  }

 
}
