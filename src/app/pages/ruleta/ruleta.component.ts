import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedimirCliente } from 'src/app/models/remidir-cliente';
import Swal from 'sweetalert2';
import { PeticionesService } from '../../services/peticiones.service';

declare var $: any;

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.scss'],
})
export class RuletaComponent implements OnInit {
  ruleta = document.querySelector('#ruleta');
  user: any;
  combos: any;
  constructor(private peticiones: PeticionesService, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(`${sessionStorage.getItem('user')}`);
    if (!this.user) {
      this.router.navigateByUrl('');
    }
    this.consultarPuntos();
    this.peticiones.consultarDatosLocales();
  }

  girarRuleta() {
    let rand = Math.random() * 7200;
    this.calcular(rand);
  }

  calcular(rand: number) {
    let valor = rand / 360;

    this.peticiones.gameOptions().subscribe((resp: any) => {
      if (resp.is_100_available) {
        valor = 50;
        rand = 1120;
      } else if (resp.is_50_available) {
        valor = 15;
        rand = 1080;
      } else {
        valor = (valor - parseInt(valor.toString().split('.')[0])) * 360;
        if (valor > 23 && valor <= 66) {
          valor = 6.918950726618235;
          rand = 2490.8222615825644;
        }
      }
      $('#ruleta').css('transform', `rotate(${rand}deg)`);

      setTimeout(() => {
        switch (true) {
          case valor > 0 && valor <= 23:
            this.user.points = '50';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );

            break;
          case valor > 23 && valor <= 66:
            this.user.points = '100';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 66 && valor <= 113:
            this.user.points = 'Puntos sorpresa';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 113 && valor <= 156:
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Girar de nuevo',
              showConfirmButton: false,
              timer: 1500,
            });
            break;
          case valor > 156 && valor <= 203:
            this.user.points = '15';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 203 && valor <= 246:
            this.user.points = '20';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 246 && valor <= 294:
            this.user.points = '30';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 294 && valor <= 336:
            this.user.points = '40';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
          case valor > 336 && valor <= 360:
            this.user.points = '50';
            this.peticiones.clients(this.user).subscribe(
              (mensaje: any) => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: mensaje.message,
                  text: `Total de Puntos: ${mensaje.total_points}`,
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  $('#btn-girar').remove();
                });
              },
              (errors: any) => {
                Swal.fire('El código ya está en uso', '', 'error');
              }
            );
            break;
        }
      }, 5000);
      rand = 0;
    });
  }

  consultarPuntos() {
    this.peticiones.consultarPuntos({ document: this.user.document }).subscribe(
      (resp: any) => {
        this.combos = resp.rewards;
      },
      (errors: any) => {
        if (errors.error.errors?.document[0]) {
        } else {
          Swal.fire(errors.error.message, '', 'error');
        }
      }
    );
  }

  redimirCombo(numeroCombo: number) {
    let body: RedimirCliente = {
      document: this.user.document,
      reward_id: numeroCombo,
    };
    this.peticiones.redimirCombos(body).subscribe(
      (resp: any) => {
        Swal.fire(resp.message, '', 'success');
      },
      (errors: any) => {
        if (errors.error.errors?.document[0]) {
          Swal.fire(
            'No tiene suficientes puntos para reclamar este combo.',
            '',
            'error'
          );
        } else {
          Swal.fire(errors.error.message, '', 'error');
        }
      }
    );
  }
}
