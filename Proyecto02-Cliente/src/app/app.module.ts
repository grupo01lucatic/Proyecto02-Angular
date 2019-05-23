import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { ListadocontactosComponent } from './components/listadocontactos/listadocontactos.component';
import { HttpClientModule } from "@angular/common/http";
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';
import { ListadoprovinciasComponent } from './components/listadoprovincias/listadoprovincias.component';
import { AltaprovinciasComponent } from './components/altaprovincias/altaprovincias.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ListadocontactosComponent,
    ContactoDetalleComponent,
    ListadoprovinciasComponent,
    AltaprovinciasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
