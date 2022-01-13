import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedimirCliente } from 'src/app/models/remidir-cliente';
import { PeticionesService } from 'src/app/services/peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-redimir',
  templateUrl: './redimir.component.html',
  styleUrls: ['./redimir.component.scss']
})
export class RedimirComponent implements OnInit {

  puntos = JSON.parse(`${sessionStorage.getItem('puntos')}`);
  user: any;
  combos: any;
  constructor(private router: Router, private peticiones: PeticionesService) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('user')){
      this.router.navigateByUrl('');
    }
    this.user = JSON.parse(`${sessionStorage.getItem('user')}`);
    this.consultarPuntos();
  }

  consultarPuntos(){
    this.peticiones.consultarPuntos({document: this.user.document}).subscribe((resp: any) => {
      this.combos = resp.rewards;
    }, (errors: any) => {
      if(errors.error.errors?.document[0]){
        Swal.fire('No existe ese número de documento.', '', 'error');
      }else{
        Swal.fire(errors.error.message, '', 'error');
      }
    })
  }

  redimirCombo(numeroCombo: number){
    let body: RedimirCliente = {
      document: this.user.document,
      reward_id: numeroCombo
    }
    this.peticiones.redimirCombos(body).subscribe((resp: any) => {
      Swal.fire(resp.message, '', 'success');
    }, (errors: any) => {
      if(errors.error.errors?.document[0]){
        Swal.fire('No tiene suficientes puntos para reclamar este combo.', '', 'error');
      }else{
        Swal.fire(errors.error.message, '', 'error');
      }
    });
  }

}
