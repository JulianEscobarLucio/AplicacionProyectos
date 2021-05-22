import { Component, OnInit, ViewChild } from '@angular/core';
import { Ayuda } from 'src/app/Modelos/ayuda';
import { AyudaServiceService } from '../../Servicios/ayuda-service.service';


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


  constructor(private ayudaServiceService: AyudaServiceService) {
  }

  ngOnInit() {
  }

  guardar(): void {
    if (!this.validarCampos()) {
      return;
    }
    this.ayudaServiceService.guardar(this.ayuda).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  validarCampos(): boolean {
    if (this.ayuda.nombre === undefined || this.ayuda.nombre === '') {
      this.mensajeNombre = 'Falta diligenciar el campo nombre';
      return false;
    } else if (this.ayuda.descripcion === undefined || this.ayuda.descripcion === '') {
      this.mensajeDescripcion = 'Falta diligenciar el campo descripción';
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
  }


  limpiarMensajes(): void {
    this.mensajeNombre = '';
    this.mensajeDescripcion = '';
  }

}
