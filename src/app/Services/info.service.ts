import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { 

  this.getinfoPag();
  this.getinfoequipo();
  }

  public getinfoPag(){
    return this.http.get('assets/data/InfoPag.json')
  
  }

public getinfoequipo(){
  return this.http.get('https://prueba-3b183-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')

}
}