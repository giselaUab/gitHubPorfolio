import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Componentes/pages/about/about.component';
import { BusquedaComponent } from './Componentes/pages/busqueda/busqueda.component';
import { HomeComponent } from './Componentes/pages/home/home.component';
import { ItemComponent } from './Componentes/pages/item/item.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'item/:id', component: ItemComponent},
  {path:'home', component: HomeComponent},
  {path:'buscar/:textBusq', component:BusquedaComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
