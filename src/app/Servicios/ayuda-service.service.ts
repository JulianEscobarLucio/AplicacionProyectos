import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicePath } from '../Constantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ayuda } from '../Modelos/ayuda';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AyudaServiceService {
  private ayudaUrl =  servicePath + '/ayuda/';  // URL to web api

  constructor(private http: HttpClient) { }


  guardar(ayuda: Ayuda): Observable<string> {
    return this.http.post<string>(this.ayudaUrl + 'agregar', ayuda, httpOptions);
  }
}
