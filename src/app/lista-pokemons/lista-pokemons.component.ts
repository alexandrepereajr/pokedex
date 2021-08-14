import { Component, OnInit } from '@angular/core';

import { PokemonsService } from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-lista-pokemons',
  templateUrl: './lista-pokemons.component.html',
  styleUrls: ['./lista-pokemons.component.css']
})

export class ListaPokemonsComponent implements OnInit {
  
  pokemons: Pokemon[] = [];

  constructor(private service: PokemonsService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.pokemons = dados);
  }

}
