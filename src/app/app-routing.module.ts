import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarAyudaComponent } from './Componentes/gestionar-ayuda/gestionar-ayuda.component';
import { GestionarActividadComponent } from './Componentes/gestionar-actividad/gestionar-actividad.component';

const routes: Routes = [
  { path: '', redirectTo: '/gestionar-ayuda', pathMatch: 'full' },
  { path: 'gestionar-ayuda', component: GestionarAyudaComponent },
  { path: 'gestionar-activdad', component: GestionarActividadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
