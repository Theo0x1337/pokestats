import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LoadPokemonsService } from './services/loadpokemons.service';
import { LoadPokemonService } from './services/loadpokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokestats';
  pokemons: any;
  pokemonsInfo: any;

  constructor(private loadPokemonsService: LoadPokemonsService, private loadPokemonService: LoadPokemonService){}

  ngOnInit(){
    this.loadPokemonsService.getPokemons()
      .subscribe(response => {
        this.pokemons = response;
        console.log(this.pokemons);
        let pokeNames = this.pokemons.results.map((pokemon: { name: string, url: string }) => pokemon.name);
        console.log(pokeNames);
        this.pokemonsInfo = this.loadPokemonService.getPokemon(pokeNames);
        console.log(this.pokemonsInfo);
      });
  }

}
