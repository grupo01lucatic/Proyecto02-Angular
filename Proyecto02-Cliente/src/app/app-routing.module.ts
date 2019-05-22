import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { ListadocontactosComponent } from './listadocontactos/listadocontactos.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: '', component: IndexComponent},
  {path:'listadocontactos', component: ListadocontactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
