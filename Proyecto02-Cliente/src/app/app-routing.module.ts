import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { ListadocontactosComponent } from './components/listadocontactos/listadocontactos.component';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';
import { AddContactoComponent } from './components/add-contacto/add-contacto.component';
import { ListadoprovinciasComponent } from './components/listadoprovincias/listadoprovincias.component';
import { AltaprovinciasComponent } from './components/altaprovincias/altaprovincias.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', component: IndexComponent},
  {path:'listadocontactos', component: ListadocontactosComponent},
  {path: 'altaprovincias', component:AltaprovinciasComponent},
  {path:'detallecontacto/:id', component: ContactoDetalleComponent},
  {path:'add-contacto', component: AddContactoComponent },
  {path: 'listadoprovincias', component: ListadoprovinciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
