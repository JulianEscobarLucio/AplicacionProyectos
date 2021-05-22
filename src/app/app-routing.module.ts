import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarAyudaComponent } from './Componentes/gestionar-ayuda/gestionar-ayuda.component';

const routes: Routes = [
  { path: '', redirectTo: '/gestionar-ayuda', pathMatch: 'full' },
  { path: 'gestionar-ayuda', component: GestionarAyudaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
