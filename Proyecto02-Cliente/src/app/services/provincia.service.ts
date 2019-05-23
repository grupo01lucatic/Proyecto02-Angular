import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provincia } from '../../app/models/Provincia';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { }

  private provinciaUrl = 'http://localhost:8080/rest/listarprovincias';


  public getProvincia(){
    return this.http.get<Provincia[]>(this.provinciaUrl);
  }

  public createProvincia(provincia) {
    return this.http.post<Provincia>('http://localhost:8080/rest/provincias', provincia);
  }
}