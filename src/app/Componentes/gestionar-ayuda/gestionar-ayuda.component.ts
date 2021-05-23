import { Component, OnInit, ViewChild } from '@angular/core';
import { Ayuda } from 'src/app/Modelos/ayuda';
import { AyudaServiceService } from '../../Servicios/ayuda-service.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-gestionar-ayuda',
  templateUrl: './gestionar-ayuda.component.html',
  styleUrls: ['./gestionar-ayuda.component.css']
})
export class GestionarAyudaComponent implements OnInit {
  ayuda = new Ayuda();
  mensajeNombre = '';
  mensajeDescripcion = '';
  base64String = '';
  mensajeBackOk = '';
  mensajeBackWarning = '';
  mensajeBackError = '';

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64 = '';
  prueba = false;
  mensajeDocumentoError ='';



  constructor(private ayudaServiceService: AyudaServiceService) {
  }

  ngOnInit() {
    console.log('inicia');
    this.prueba = true;
  }

  guardar(): void {
    if (!this.validarCampos()) {
      return;
    }
    this.ayuda.archivo = document.getElementById('archivo').innerHTML;
    this.ayudaServiceService.guardar(this.ayuda).subscribe(
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
    this.ayuda = {
      id: '',
      nombre: '',
      descripcion: '',
      enlace: '',
      archivo: '',
    };
  }

  validarCampos(): boolean {
    if (this.ayuda.nombre === undefined || this.ayuda.nombre === '') {
      this.mensajeNombre = 'Falta diligenciar el campo nombre';
      return false;
    } else if (this.ayuda.descripcion === undefined || this.ayuda.descripcion === '') {
      this.mensajeDescripcion = 'Falta diligenciar el campo descripción';
      return false;
    } else if (this.mensajeDocumentoError !== '') {
      return false;
    }
    return true;
  }


  cancelar(): void {
    this.ayuda = {
      id: '',
      nombre: '',
      descripcion: '',
      enlace: '',
      archivo: '',
    };
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
    this.mensajeDocumentoError = '';

  }


  limpiarMensajes(): void {
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
    this.mensajeBackOk = '';
    this.mensajeBackWarning = '';
    this.mensajeBackError = '';
    this.mensajeDocumentoError = '';
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
          this.ayuda.archivo = e.target.result;
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

}
