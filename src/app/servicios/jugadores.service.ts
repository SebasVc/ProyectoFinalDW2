import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private verbo: HttpClient) { }

  players(id){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${id}`)
  }

  player(id){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`)
  }

}
