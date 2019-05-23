import { Injectable } from '@angular/core';

//Nuevo
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';

//Nuevo
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const URL_BASE = 'http://localhost:8080/rest';
const URL_DETALLE = (id:number) => `${URL_BASE}/detallecontacto${id}`;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Todo lo de la clase es nuevo

  constructor(private http:HttpClient) {}

  private personaUrl = 'http://localhost:8080/rest/listadocontactos';

  //private userUrl = '/api';

  // GET
  public getDetalle(id:number) {
    return this.http.get<Persona>(URL_DETALLE(id));
  }


  public getPersona() {
    return this.http.get<Persona[]>(this.personaUrl);
  }

  //http://localhost:8080/user-portal/users/5
  public deletePersona(persona) {
    return this.http.delete('http://localhost:8080/rest/eliminarcontacto'+persona.idpersona);
  }

  public createContacto(persona) {
    return this.http.post<Persona>(this.personaUrl, persona);
  }

}
