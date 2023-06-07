import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  
@Injectable({
  providedIn: 'root'
})
export class LoadPokemonsService {
  
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
   
  constructor(private httpClient: HttpClient) { }
  
  getPokemons(){
    return this.httpClient.get(this.url);
  }
  
}