import { Component, OnInit, ViewChild } from '@angular/core';
import { Actividad } from 'src/app/Modelos/actividad';
import { AyudaServiceService } from '../../Servicios/ayuda-service.service';

@Component({
  selector: 'app-gestionar-actividad',
  templateUrl: './gestionar-actividad.component.html',
  styleUrls: ['./gestionar-actividad.component.css']
})
export class GestionarActividadComponent implements OnInit {

  actividad = new Actividad();
  mensajeNombre = '';
  mensajeDescripcion = '';
  mensajeEstado = '';
  mensajeBackOk = '';
  mensajeBackWarning = '';
  mensajeBackError = '';
  estados: string[];

  constructor(private ayudaServiceService: AyudaServiceService) {
  }

  ngOnInit() {
    this.estados = ['Iniciado', 'En proceso', 'Finalizado'];
  }

  guardar(): void {
    if (!this.validarCampos()) {
      return;
    }
    this.ayudaServiceService.guardar(this.actividad).subscribe(
      response => {
        if (response.estadoDelaOperacion) {
          this.mensajeBackOk = response.mensaje;
        } else {
          this.mensajeBackWarning = response.mensaje;
        }
      },
      error => {
        this.mensajeBackError = error.mensaje;
      }
    );
    this.actividad = {
      nombre: '',
      descripcion: '',
      evidencia: '',
      recomendacion: '',
      fechaInicio: '2021-06-01',
      estado: '',
      fechaFin: '2021-06-02',
    };
  }

  validarCampos(): boolean {
    if (this.actividad.nombre === undefined || this.actividad.nombre === '') {
      this.mensajeNombre = 'Falta diligenciar el campo nombre';
      return false;
    } else if (this.actividad.descripcion === undefined || this.actividad.descripcion === '') {
      this.mensajeDescripcion = 'Falta diligenciar el campo descripción';
      return false;
    } else if (this.actividad.estado === undefined || this.actividad.estado === '') {
      this.mensajeDescripcion = 'Falta diligenciar el campo descripción';
      return false;
    }
    return true;
  }


  cancelar(): void {
    this.actividad = {
      nombre: '',
      descripcion: '',
      evidencia: '',
      recomendacion: '',
      fechaInicio: '2021-06-01',
      estado: '',
      fechaFin: '2021-06-02',
    };
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
  }


  limpiarMensajes(): void {
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeEstado = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
  }

}
