import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InfoService} from '../../Services/info.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagServ:InfoService, 
    private router: Router) { }

  ngOnInit(): void {
    

  }
  buscarcat(texto:string){
    if (texto.length > 2) {
      this.router.navigate(['buscar', texto]);
    }else{
      alert('La cantidad minima de caracteres para realizar la busqueda es de tres caracteres');
    }
  }
cleanBusqueda(){
  this.router.navigate(['home']);
}

  }


