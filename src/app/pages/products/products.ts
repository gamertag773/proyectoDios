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
      {
        id: "2a",
        img: "../../../assets/airpodspro3.jpg",
        alt: "airpods pro3",
        titulo: "airpods pro3",
        precio: 249,
        anualpublication: 2025
      },
      {
        id: "2b",
        img: "../../../assets/ipadprofinish.webp",
        alt: "ipadpro",
        titulo: "ipad pro",
        precio: 999,
        anualpublication: 2025
      },
      {
        id: "2c",
        img: "../../../assets/watchultra.jpg",
        alt: "watch ultra",
        titulo: "watch ultra",
        precio: 799,
        anualpublication: 2025
      },
      {
        id: "2d",
        img: "../../../assets/watchs11.jpg",
        alt: "apple watch",
        titulo: "apple watch s11",
        precio: 399,
        anualpublication: 2025
      },
    ]
  }

  tarjetaseleccionada: any = null;
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

}
