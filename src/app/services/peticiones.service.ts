import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/clientes';
import { RedimirCliente } from '../models/remidir-cliente';
import { BehaviorSubject } from 'rxjs';
import { Consulta } from '../models/consultar-puntos';


@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private http: HttpClient) { 
    this.consultarDatosLocales();
  }

  private data = new BehaviorSubject(null);
  currentMessage = this.data.asObservable();

  consultarDatosLocales(){
    this.data.next(JSON.parse(`${sessionStorage.getItem('user')}`));
  }

  gameOptions(){
    return this.http.get(`${environment.url}/api/game-options`);
  }
  clients(body: Client){
    return this.http.post(`${environment.url}/api/clients`, body)
  }
  redimirCombos(body: RedimirCliente){
    return this.http.post(`${environment.url}/api/redeem-points/redeem`, body);
  }
  consultarPuntos(body: Consulta){
    return this.http.post(`${environment.url}/api/redeem-points/client`, body);
  }
}
