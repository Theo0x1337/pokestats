import { Injectable } from '@angular/core';
import Pokedex from 'pokedex-promise-v2';
  
@Injectable({
  providedIn: 'root'
})
export class LoadPokemonService {
    pokedex = new Pokedex();
   
  constructor() { }
  
  getPokemon(name: string | Array<string>){
    this.pokedex.getPokemonByName(name) 
    .then((response) => {
        console.log(response)
        return response;
    })
    .catch((error) => {
        console.log('There was an ERROR: ', error);
    });
  }
  
}