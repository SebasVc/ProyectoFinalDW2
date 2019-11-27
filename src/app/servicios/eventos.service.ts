import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private verbo: HttpClient) { }

  eventsLast(id){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
  }

  events(id){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`)
  }

  todosLosEventos(){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920`);
  }

  evento(id){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${id}`)
  }
}
