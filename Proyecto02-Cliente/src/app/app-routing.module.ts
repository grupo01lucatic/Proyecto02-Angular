import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { ListadocontactosComponent } from './components/listadocontactos/listadocontactos.component';
import { ContactoDetalleComponent } from './contacto-detalle/contacto-detalle.component';
import { ListadoprovinciasComponent } from './components/listadoprovincias/listadoprovincias.component';
import { AltaprovinciasComponent } from './components/altaprovincias/altaprovincias.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', component: IndexComponent},
  {path:'listadocontactos', component: ListadocontactosComponent},
  {path:'detalle/:id', component: ContactoDetalleComponent},
  {path: 'listadoprovincias', component: ListadoprovinciasComponent},
  {path: 'altaprovincias', component:AltaprovinciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
