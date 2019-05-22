import { Injectable } from '@angular/core';

//Nuevo
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';

//Nuevo
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Todo lo de la clase es nuevo

  constructor(private http:HttpClient) {}

  private personaUrl = 'http://localhost:8080/rest/listadocontactos';
  //private userUrl = '/api';

  public getPersona() {
    return this.http.get<Persona[]>(this.personaUrl);
  }

  //http://localhost:8080/user-portal/users/5
  public deletePersona(persona) {
    return this.http.delete('http://localhost:8080/rest/eliminarcontacto'+persona.idpersona);
  }

  public createPersona(persona) {
    return this.http.post<Persona>(this.personaUrl, persona);
  }

}
