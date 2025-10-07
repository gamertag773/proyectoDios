import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /* 
  propiedad publica/privada
  */
  public infotarjeta: Tarjeta[];

  constructor() {
    this.infotarjeta = [
      {
        id: "1a",
        img:"../../../assets/iphone13promax.jpg",
        alt:"iphone13promax",
        titulo: "iphone 13 ProMax",
        descripcion: "iphone 13 pro-max a la venta",
        anualpublication: 2021
      },
      { 
        id: "1b",
        img:"../../../assets/iphone14promax.jpg",
        alt:"iphone14promax",
        titulo: "iphone 14 ProMax",
        descripcion: "iphone 14 pro-max a la venta",
        anualpublication: 2022
      },
            { 
        id: "1c",
        img:"../../../assets/iphone15promax-azul.webp",
        alt:"iphone15promax",
        titulo: "iphone 15 ProMax",
        descripcion: "iphone 15 pro-max a la venta",
        anualpublication: 2023
      },
            { 
        id: "1d",
        img:"../../../assets/jsjsjsj.webp",
        alt:"iphone16promax",
        titulo: "iphone 16 ProMax",
        descripcion: "iphone 16 pro-max a la venta",
        anualpublication: 2024
      },
    ]
  }
}