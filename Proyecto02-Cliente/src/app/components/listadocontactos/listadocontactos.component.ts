import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadocontactos',
  templateUrl: './listadocontactos.component.html',
  styleUrls: ['./listadocontactos.component.css']
})
export class ListadocontactosComponent implements OnInit {

  persona: Persona[];

  constructor(private router: Router, private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersona()
      .subscribe( data => {
        this.persona = data;
      });
  }

  deletePersona(persona: Persona): void {
    this.personaService.deletePersona(persona)
      .subscribe( data => {
        this.persona = this.persona.filter(u => u !== persona);
      })
  };
}
