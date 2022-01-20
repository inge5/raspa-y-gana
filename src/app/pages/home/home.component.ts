import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private peticiones: PeticionesService
  ) {}

  crearFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      document: [
        '',
        [
          Validators.required,
          Validators.min(100000),
          Validators.max(9999999999),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(1000000),
          Validators.max(9999999999),
        ],
      ],
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(20),
        ],
      ],
      points: [''],
      acepto: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('user')) {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('puntos');
      this.peticiones.consultarDatosLocales();
    }
    this.crearFormulario();
  }

  get Name() {
    return this.formulario.get('name');
  }
  get Document() {
    return this.formulario.get('document');
  }
  get Email() {
    return this.formulario.get('email');
  }
  get Phone() {
    return this.formulario.get('phone');
  }
  get Code() {
    return this.formulario.get('code');
  }

  get validarName() {
    return (
      this.formulario.get('name')?.invalid &&
      (this.formulario.get('name')?.dirty ||
        this.formulario.get('name')?.touched)
    );
  }
  get validarDocument() {
    return (
      this.formulario.get('document')?.invalid &&
      (this.formulario.get('document')?.dirty ||
        this.formulario.get('document')?.touched)
    );
  }
  get validarEmail() {
    return (
      this.formulario.get('email')?.invalid &&
      (this.formulario.get('email')?.dirty ||
        this.formulario.get('email')?.touched)
    );
  }
  get validarPhone() {
    return (
      this.formulario.get('phone')?.invalid &&
      (this.formulario.get('phone')?.dirty ||
        this.formulario.get('phone')?.touched)
    );
  }
  get validarCode() {
    return (
      this.formulario.get('code')?.invalid &&
      (this.formulario.get('code')?.dirty ||
        this.formulario.get('code')?.touched)
    );
  }

  get correctoName() {
    return this.Name?.valid;
  }
  get correctoDocument() {
    return this.Document?.valid;
  }
  get correctoEmail() {
    return this.Email?.valid;
  }
  get correctoPhone() {
    return this.Phone?.valid;
  }
  get correctoCode() {
    return this.Code?.valid;
  }

  PasarRuleta() {
    if (this.formulario.invalid && !this.formulario.get('acepto')!.value) {
      return Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    if (this.formulario.invalid && this.formulario.get('acepto')!.value) {
      return Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    if (!this.formulario.get('acepto')!.value) {
      alert('Debes aceptar terminos y condiciones');
      return;
    }
    let phone: number = this.Phone!.value;
    let code: number = this.Code!.value;
    this.formulario.controls['phone'].setValue(phone.toString());
    this.formulario.controls['code'];
    sessionStorage.setItem('user', JSON.stringify(this.formulario.value));
    this.router.navigateByUrl('/ruleta');
  }
}
