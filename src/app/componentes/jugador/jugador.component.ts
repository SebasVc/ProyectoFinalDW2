import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  player = []
  constructor(private sJugadores: JugadoresService, private id: ActivatedRoute,) { }

  ngOnInit() {
    this.traerJugador(this.id.snapshot.params['id']);
  }

  traerJugador(id){
    this.sJugadores.player(id).subscribe((data)=>{
      console.log(data['players'])
      this.player = data['players'];
    });
  }
}
