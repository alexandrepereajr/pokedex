import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListaPokemonsComponent } from './lista-pokemons/lista-pokemons.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lista-pokemons', component: ListaPokemonsComponent},
  { path: 'favoritos', component: FavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
