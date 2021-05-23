import { Component, OnInit, ViewChild } from '@angular/core';
import { Actividad } from 'src/app/Modelos/actividad';
import { ActividadServiceService } from '../../Servicios/actividad-service.service';
import * as _ from 'lodash';

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
  mensajeFechaInicio = '';
  mensajeFechaFin = '';
  mensajeBackOk = '';
  mensajeBackWarning = '';
  mensajeBackError = '';
  estados: string[];

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64 = '';
  prueba = false;
  mensajeDocumentoError = '';

  constructor(private actividadServiceService: ActividadServiceService) {
  }

  ngOnInit() {
    this.estados = ['Iniciado', 'En proceso', 'Finalizado', 'Programado'];
  }

  guardar(): void {
    if (!this.validarCampos()) {
      return;
    }
    this.actividad.evidencia = document.getElementById('archivo').innerHTML;
    this.actividadServiceService.guardar(this.actividad).subscribe(
      response => {
        if (response.estadoDelaOperacion) {
          this.mensajeBackOk = response.mensaje;
        } else {
          this.mensajeBackWarning = response.mensaje;
        }
      },
      error => {
        this.mensajeBackError = error.error.mensaje;
      }
    );
    this.actividad = {
      nombre: '',
      descripcion: '',
      evidencia: '',
      recomendacion: '',
      fechaInicio: undefined,
      estado: '',
      fechaFin: undefined,
    };
  }

  validarCampos(): boolean {
    if (this.actividad.nombre === undefined || this.actividad.nombre === '') {
      this.mensajeNombre = 'Falta diligenciar el campo nombre';
      return false;
    } else if (this.actividad.descripcion === undefined || this.actividad.descripcion === '') {
      this.mensajeDescripcion = 'Falta diligenciar el campo descripción';
      return false;
    } else if (this.actividad.fechaInicio === undefined ) {
      this.mensajeFechaInicio = 'Falta ingresar la fecha de inicio';
      return false;
    } else if (this.actividad.estado === undefined || this.actividad.estado === '') {
      this.mensajeEstado = 'Falta seleccionar el estado';
      return false;
    } else if (this.actividad.fechaFin !== undefined && this.actividad.fechaFin < this.actividad.fechaInicio) {
      this.mensajeFechaFin = 'La fecha fin de la actividad no puede ser inferior a la fecha inicial';
      return false;
    } else if (this.mensajeDocumentoError !== '') {
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
      fechaInicio: undefined,
      estado: '',
      fechaFin: undefined,
    };
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeEstado = '';
    this.mensajeFechaInicio = '';
    this.mensajeFechaFin = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
    this.mensajeDocumentoError = '';

  }


  limpiarMensajes(): void {
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeEstado = '';
    this.mensajeFechaInicio = '';
    this.mensajeFechaFin = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
    this.mensajeDocumentoError = '';

    
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }

  validarFechaFin() {
    if (this.actividad.fechaFin !== undefined && this.actividad.fechaFin < this.actividad.fechaInicio) {
      this.mensajeFechaFin = 'La fecha fin de la actividad no puede ser inferior a la fecha inicial';
    }
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    this.mensajeDocumentoError = '';
    if (fileInput.target.files && fileInput.target.files[0]) {

        const max_size = 20971520;
        const allowed_types = [ 'application/pdf'];
        const max_height = 15200;
        const max_width = 25600;

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.mensajeDocumentoError = 'Solo se permiten archivos PDF';
            return false;
        }
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.cardImageBase64 = e.target.result;
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

}
