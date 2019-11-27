import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from './../../servicios/equipos.service';
import { EventosService } from './../../servicios/eventos.service';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { TablaService } from 'src/app/servicios/tabla.service';
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  table = [];
  eventslast = [];
  events = [];
  allEvents = [];
  allEventsLast = [];
  team = [];
  players = [];

  constructor(
    private sEquipos: EquiposService, 
    private sEventos: EventosService,
    private sJugadores: JugadoresService,
    private sTabla: TablaService,
    private id: ActivatedRoute,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.jugadoresDeUnEquipo(this.id.snapshot.params['id']);
    this.traerEvents(this.id.snapshot.params['id'])
    this.traerAllEvents(this.id.snapshot.params['id'])
    this.traerLastEvents(this.id.snapshot.params['id'])
    this.equipoBuscado(this.id.snapshot.params['id']);
    this.traerTable();
  }

  equipoBuscado(id){
    this.sEquipos.team(id).subscribe((data)=>{
      this.team = data['teams'];
    });
  }

  jugadoresDeUnEquipo(id){
    this.sJugadores.players(id).subscribe((data)=>{
      this.players = data['player'];
    });
  }

  traerLastEvents(id: string) {
    this.sEventos.eventsLast(id).subscribe((data) => {
      this.eventslast = data['results'];
    });
  }

  traerAllEvents(id: string) {
    this.sEventos.todosLosEventos().subscribe((data) => {
      for (let i = 0; i < data["events"].length; i++) {
        const element = data["events"][i];
        if (element.dateEvent>=this.datePipe.transform(new Date, "yyyy-MM-dd")) {
          this.allEvents.push(element)
        }else{
          this.allEventsLast.push(element)
        }
      }
    });
  }

  traerEvents(id: string) {
    this.sEventos.events(id).subscribe((data) => {
      this.events = data['events'];
    });
  }

  traerTable(){
    this.sTabla.table().subscribe((data)=>{
      this.table = data['table'];
    });
  }

  isShow = true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  show(id){
    this.sEventos.evento(id).subscribe((data)=>{
      data = data['events'];
      console.log(data[0])
      alert(
        `${data[0].strEvent} \n
        Resultado: ${data[0].intHomeScore}-${data[0].intAwayScore} \n
        Formación L: ${data[0].strHomeFormation || "NN"} \n
        Fromación V: ${data[0].strAwayFormation || "NN"} \n
        T. Amarillas L: ${data[0].strHomeYellowCards || "NN"}\n
        T. Amarillas V: ${data[0].strAwayYellowCards || "NN"} \n
        Cambios L: ${data[0].strHomeLineupSubstitutes}\n
        Cambios V: ${data[0].strAwayLineupSubstitutes}`
      )
     
    });
    
  }

}
