import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { DetalhesPokemonComponent } from './lista-pokemons/detalhes-pokemon/detalhes-pokemon.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaPokemonsComponent,
    DetalhesPokemonComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
