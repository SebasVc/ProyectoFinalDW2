import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoEquiposComponent } from './componentes/listado-equipos/listado-equipos.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { JugadorComponent } from './componentes/jugador/jugador.component';

const routes: Routes = [
  { path: 'teams', component: ListadoEquiposComponent },
  { path: 'team/:id', component: EquipoComponent },
  { path: 'player/:id', component: JugadorComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}),],
exports: [RouterModule]
})
export class AppRoutingModule { }
