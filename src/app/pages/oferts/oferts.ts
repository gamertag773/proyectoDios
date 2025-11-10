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
        id: "1a",
        img: "../../../assets/iphoneairspaceblack.webp",
        alt: "iphone Air",
        titulo: "iphone Air",
        precio: 999,
        anualpublication: 2025
      },
      {
        id: "1b",
        img: "../../../assets/iphone17white.webp",
        alt: "iphone17",
        titulo: "iphone 17",
        precio: 799,
        anualpublication: 2025
      },
      {
        id: "1c",
        img: "../../../assets/iphone17prodeepblue.webp",
        alt: "iphone17pro",
        titulo: "iphone 17 Pro",
        precio: 1099,
        anualpublication: 2025
      },
      {
        id: "1d",
        img: "../../../assets/iphone16eblack.webp",
        alt: "iphone16e",
        titulo: "iphone 16e",
        precio: 599,
        anualpublication: 2025
      },
    ]
  }

  tarjetaseleccionada: any = null;
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

}

