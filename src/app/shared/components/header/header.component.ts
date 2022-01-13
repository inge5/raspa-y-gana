import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consultar-puntos';
import { PeticionesService } from 'src/app/services/peticiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  puntos = {
    total_puntos: '',
    puntos_redimidos: '',
    puntos_disponibles: ''
  }
  document: Consulta = {
    document: ''
  };
  constructor(private peticiones: PeticionesService, private router: Router) {
   }

  ngOnInit(): void {
    this.peticiones.currentMessage.subscribe(() => {
      this.user = JSON.parse(`${sessionStorage.getItem('user')}`);
    })
  }

  validarDocumento(){
    Swal.fire('Validando', '', 'info');
    Swal.showLoading();
    this.peticiones.consultarPuntos(this.document).subscribe((resp: any) => {
      this.puntos.puntos_disponibles = resp.available_points;
      this.puntos.puntos_redimidos = resp.redeemed_points;
      this.puntos.total_puntos = resp.total_points;
      sessionStorage.setItem('puntos', JSON.stringify(this.puntos));
      Swal.close();
      this.router.navigateByUrl('redimir');
      this.document.document = '';
    }, errors => {
      Swal.fire('No existe documento registrado','','error')
    })
    new Promise((resolver, rejects) => {
      resolver(sessionStorage.setItem('user', JSON.stringify(this.document)))
      rejects(this.document.document = '')
    }).then(() => {
      this.peticiones.consultarDatosLocales();
    }).catch(() => {
      this.peticiones.consultarDatosLocales();
    })
    
  }

}
