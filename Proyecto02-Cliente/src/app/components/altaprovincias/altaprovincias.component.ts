import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciaService } from '../../services/provincia.service';
import { Provincia } from 'src/app/models/Provincia';

@Component({
  selector: 'app-altaprovincias',
  templateUrl: './altaprovincias.component.html',
  styleUrls: ['./altaprovincias.component.css']
})
export class AltaprovinciasComponent implements OnInit {

  provincia: Provincia = new Provincia();

 constructor(private router: Router, private provinciaService: ProvinciaService) {

 }
  createProvincia(): void {
    this.provinciaService.createProvincia(this.provincia)
        .subscribe( data => {
          alert("Provincia generada de forma correcta.");
        });

  };

ngOnInit() {
  }

}
