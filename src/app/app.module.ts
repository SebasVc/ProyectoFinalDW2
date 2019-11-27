import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ListadoEquiposComponent } from './componentes/listado-equipos/listado-equipos.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { AppComponent } from './app.component';
import { EquiposService } from './servicios/equipos.service';
import { JugadoresService } from './servicios/jugadores.service';
import { TablaService } from './servicios/tabla.service';
import { EventosService } from './servicios/eventos.service';
import { JugadorComponent } from './componentes/jugador/jugador.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ListadoEquiposComponent,
    EquipoComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EquiposService, JugadoresService, TablaService, EventosService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
