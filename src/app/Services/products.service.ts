import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 

  }
  public getProductsIdx(){
    return this.http.get('https://prueba-3b183-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
  }

  public getProducts(){
    return this.http.get(`https://prueba-3b183-default-rtdb.europe-west1.firebasedatabase.app/productos.json`)
  }

  getProduct(idProd: string){
    return this.http.get(`https://prueba-3b183-default-rtdb.europe-west1.firebasedatabase.app/productos/${idProd}.json`)
  }
}
