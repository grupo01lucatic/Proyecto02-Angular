import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class  AddContactoComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router: Router, private personaService: PersonaService) {

  }

  createContacto(): void {
    this.personaService.createContacto(this.persona)
        .subscribe( data => {
          alert("Se ha añadido un contacto nuevo");
        });
  };

  ngOnInit() {
  };

}
