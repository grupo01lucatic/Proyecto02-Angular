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
  persona: Persona

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getDetalle(1).subscribe((persona: Persona) => this.persona = persona);

  }

  deletePersona(): void {
    if (window.confirm("Estas seguro que quieres eliminar?")) {
      this.personaService.deletePersona(this.persona).subscribe(() => this.router.navigateByUrl('/listadocontactos'));

    }
  }
}
