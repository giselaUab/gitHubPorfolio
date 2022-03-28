import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { HomeComponent } from './Componentes/pages/home/home.component';
import { ItemComponent } from './Componentes/pages/item/item.component';
import { AboutComponent } from './Componentes/pages/about/about.component';
import { BusquedaComponent } from './Componentes/pages/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ItemComponent,
    AboutComponent,
    BusquedaComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
