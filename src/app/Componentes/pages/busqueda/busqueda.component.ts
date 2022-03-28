import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

textbusqueda: any = '';
productos: any=[];
productosResultados: any = [];


  constructor(private route:ActivatedRoute,
  public productServices:ProductsService){ }

  ngOnInit(): void {
    this.textbusqueda= this.route.snapshot.paramMap.get('textBusq');
    
    this.textbusqueda = this.textbusqueda.toLowerCase();

    this.productServices.getProductsIdx()
    .subscribe((resp: any) => {
      this.productos = resp; 
      

      this.productos.forEach((prod: any) => {
        let categoria = prod.categoria.toLowerCase();
         if(prod.categoria.indexOf(this.textbusqueda) >= 0 ){
          this.productosResultados.push(prod);
          
        }
        
      });
      
    });
  }

}
