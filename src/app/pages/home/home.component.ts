import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private peticiones: PeticionesService) { 

  }

  crearFormulario(){
    this.formulario = this.fb.group({
      name: [''],
      document: [''],
      email: [''],
      phone: [''],
      code: [''],
      points: [''],
      acepto: [false]
    })
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('puntos');
      this.peticiones.consultarDatosLocales();
    }
    this.crearFormulario();
  }

  PasarRuleta(){
    if(this.formulario.invalid && !this.formulario.get('acepto')!.value){
      return Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    if(this.formulario.invalid && this.formulario.get('acepto')!.value){
      return Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    if(!this.formulario.get('acepto')!.value){
      alert('Debes aceptar terminos y condiciones');
      return;
    }
    let phone:number = this.formulario.get('phone')!.value
    let points:number = this.formulario.get('points')!.value
    this.formulario.controls['phone'].setValue(phone.toString())
    sessionStorage.setItem('user', JSON.stringify(this.formulario.value))
    this.router.navigateByUrl('/ruleta');
  }
}
