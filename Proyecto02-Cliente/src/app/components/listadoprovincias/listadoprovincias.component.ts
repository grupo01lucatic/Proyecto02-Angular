import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincia.service';
import { Provincia } from 'src/app/models/provincia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadoprovincias',
  templateUrl: './listadoprovincias.component.html',
  styleUrls: ['./listadoprovincias.component.css']
})
export class ListadoprovinciasComponent implements OnInit {

  provincia: Provincia[];

  constructor(private router: Router, private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.provinciaService.getProvincia()
    .subscribe( data => {
      this.provincia = data;
    });
  }

}
