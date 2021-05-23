import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './Componentes/navegador/navegador.component';
import { GestionarAyudaComponent } from './Componentes/gestionar-ayuda/gestionar-ayuda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionarActividadComponent } from './Componentes/gestionar-actividad/gestionar-actividad.component';
import { ActividadComponent } from './Modelos/actividad/actividad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    GestionarAyudaComponent,
    GestionarActividadComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
