import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly API = `${environment.API}/pokemon`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Pokemon[]>(this.API);
  }
}
