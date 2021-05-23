import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicePath } from '../Constantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaDTO } from '../Dtos/respuesta-dto';
import { Actividad } from '../Modelos/actividad';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ActividadServiceService {

  private ayudaUrl =  servicePath + '/actividad';  // URL to web api

  constructor(private http: HttpClient) { }


  guardar(actividad: Actividad): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.ayudaUrl + '/agregar', actividad, httpOptions);
  }
}
