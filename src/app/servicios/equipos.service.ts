import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  favoritosPorid=[]
  constructor(private verbo: HttpClient) { }
  teams() {
    return this.verbo.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  team(id) {
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
  }

  teamsFav(id) {
    if (this.favoritosPorid == null) {
      this.favoritosPorid = []
    } else {
      this.favoritosPorid = JSON.parse(localStorage.getItem("favoritosPorid"));
    }
    let aux = true;
    for (let i = 0; i < this.favoritosPorid.length; i++) {
      if (id == this.favoritosPorid[i]) {
        aux = false;
      }
    }
    if (aux) {
      this.favoritosPorid.push(id)
      localStorage.setItem("favoritosPorid", JSON.stringify(this.favoritosPorid))
      return true;
    }else{
      return false;
    }
  }
}
