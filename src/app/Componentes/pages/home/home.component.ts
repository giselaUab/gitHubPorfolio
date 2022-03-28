import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any=[];
  loading = true; 
  
  constructor(private productServices:ProductsService) { }

  ngOnInit(): void {

    
    this.productServices.getProductsIdx()
    .subscribe((resp: any) => {
    this.productos = resp;

setTimeout(() => {
  this.loading = false;
}, 3000);
      
    })
  }

}
