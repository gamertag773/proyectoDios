import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-oferts',
  imports: [CommonModule],
  templateUrl: './oferts.html',
  styleUrl: './oferts.css'
})
export class Oferts {
  /* 
   propiedad publica/privada
   */
  public infotarjeta: Tarjeta[];

  constructor() {
    //aca ingrese de forma amanual cada producto usando el modelo de tarjeta del tarjeta.ts de la carpeta models
    this.infotarjeta = [
      {
        id: "2a",
        img: "../../../assets/macbook14inch.jpeg",
        alt: "macbook14inch",
        titulo: "Macbook 14 inch",
        precio: 999,
        pdescuento: 899,
        anualpublication: 2025
      },
      {
        id: "2b",
        img: "../../../assets/imacpurple24inch.jpeg",
        alt: "imacpurple",
        titulo: "Imac 24 inch",
        precio: 1299,
        pdescuento: 1199,
        anualpublication: 2025
      },
      {
        id: "2c",
        img: "../../../assets/mac-mini-silver.jpeg",
        alt: "mac-mini-silver",
        titulo: "Mac mini silver",
        precio: 599,
        pdescuento: 499,
        anualpublication: 2025
      },
      {
        id: "2d",
        img: "../../../assets/airtag-4pack.png",
        alt: "airtag",
        titulo: "Airtag 4 pack",
        precio: 99,
        pdescuento: 89,
        anualpublication: 2025
      },
      {
        id: "2e",
        img: "../../../assets/homepod-mini-blue.jpeg",
        alt: "homepod-mini",
        titulo: "Homepod-mini-blue",
        precio: 99,
        pdescuento: 89,
        anualpublication: 2025
      },
    ]
  }

  tarjetaseleccionada: any = null;
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

}

