import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private verbo: HttpClient) { }
  table(){
    return this.verbo.get(`https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920`);
  }
}
