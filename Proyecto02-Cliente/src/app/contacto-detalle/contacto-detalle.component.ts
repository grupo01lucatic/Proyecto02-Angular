import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import { Telefono } from '../models/Telefono';
import { Direccion } from '../models/Direccion';
import { Provincia } from '../models/Provincia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto-detalle',
  templateUrl: './contacto-detalle.component.html',
  styleUrls: ['./contacto-detalle.component.css']
})
export class ContactoDetalleComponent implements OnInit {
  persona:Persona

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {    
    this.personaService.getDetalle(1).subscribe((persona:Persona) => this.persona = persona);





    const provincia = new Provincia(1, 'mad');
    const p = new Persona();
          p.nombre = "Antonio";
          p.apellido1 = "Diaz";
          p.apellido2 = "Sanz";
          p.fechanacimiento = new Date();
          p.dni = "12345678P";
          p.idpersona = 1;
          p.telefonos = [
            new Telefono(1, 1, '123456789'),
            new Telefono(2, 1, '987654321'),
          ]
          p.direcciones = [
            new Direccion(1, 1, '123', 'calle', 'mad', provincia),
            new Direccion(1, 1, '123', 'calle', 'alcala', provincia)
          ]

    this.persona = p;

    
  }

  deletePersona(): void {
    if(window.confirm("Estas seguro que quieres eliminar?")) {
      this.personaService.deletePersona(this.persona).subscribe(() => this.router.navigateByUrl('/listadocontactos'));





      this.router.navigateByUrl('/listadocontactos')
    }
  }
}
