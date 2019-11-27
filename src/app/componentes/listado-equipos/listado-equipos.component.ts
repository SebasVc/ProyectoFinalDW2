import { Component, OnInit } from '@angular/core';
import { EquiposService } from './../../servicios/equipos.service';


@Component({
  selector: 'app-listado-equipos',
  templateUrl: './listado-equipos.component.html',
  styleUrls: ['./listado-equipos.component.css']
})
export class ListadoEquiposComponent implements OnInit {

  teamslist = []
  favoritosPorid:any = JSON.parse(localStorage.getItem("favoritosPorid"));
  favoritos:any = JSON.parse(localStorage.getItem("favoritos"));

  constructor(private sEquipos: EquiposService) { }

  ngOnInit() {
    this.getteams();
  }

  

  clickFavorito(id) {
    if(this.sEquipos.teamsFav(id)){
      this.addEquipoToFavoritos(id)
    }
  }

  getteams(): void {
    this.sEquipos.teams().subscribe((data)=>{
      console.log(data["teams"]);
      this.teamslist = data['teams'];
    });
  }

  addEquipoToFavoritos(id): void {
    this.sEquipos.team(id).subscribe((data) => {
      if (this.favoritos!=null) {
        this.favoritos = JSON.parse(localStorage.getItem("favoritos"));
      }else{
        this.favoritos=[]
      }
      this.favoritos.push(data['teams'][0]);
      localStorage.setItem("favoritos",JSON.stringify(this.favoritos));
      alert("tus favoritos estan al inicio de la pagina")
    });
  }


}
