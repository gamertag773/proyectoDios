import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-galeri',
  imports: [CommonModule],
  templateUrl: './galeri.html',
  styleUrl: './galeri.css'
})
export class Galeri {
  /* 
   propiedad publica/privada
   */
  public infotarjeta: Tarjeta[];

  constructor() {
    //aca ingrese de forma amanual cada producto usando el modelo de tarjeta del tarjeta.ts de la carpeta models
    this.infotarjeta = [
      {
        id: "1a",
        img: "../../../assets/macbook14inch.jpeg",
        alt: "macbook14inch",
        titulo: "Macbook 14 inch",
        precio: 999,
        pdescuento: 899,
        anualpublication: 2025
      },
      {
        id: "1b",
        img: "../../../assets/imacpurple24inch.jpeg",
        alt: "imacpurple",
        titulo: "Imac 24 inch",
        precio: 1299,
        pdescuento: 1199,
        anualpublication: 2025
      },
      {
        id: "1c",
        img: "../../../assets/mac-mini-silver.jpeg",
        alt: "mac-mini-silver",
        titulo: "Mac mini silver",
        precio: 599,
        pdescuento: 499,
        anualpublication: 2025
      },
      {
        id: "1d",
        img: "../../../assets/airtag-4pack.png",
        alt: "airtag",
        titulo: "Airtag 4 pack",
        precio: 99,
        pdescuento: 89,
        anualpublication: 2025
      },
      {
        id: "1e",
        img: "../../../assets/homepod-mini-blue.jpeg",
        alt: "homepod-mini",
        titulo: "Homepod-mini-blue",
        precio: 99,
        pdescuento: 89,
        anualpublication: 2025
      },
      {
        id: "2a",
        img: "../../../assets/iphoneairspaceblack.webp",
        alt: "iphone Air",
        titulo: "Iphone Air",
        precio: 0,
        pdescuento: 999,
        anualpublication: 2025
      },
      {
        id: "2b",
        img: "../../../assets/iphone17white.webp",
        alt: "iphone17",
        titulo: "Iphone 17",
        precio: 0,
        pdescuento: 799,
        anualpublication: 2025
      },
      {
        id: "2c",
        img: "../../../assets/iphone17prodeepblue.webp",
        alt: "iphone17pro",
        titulo: "Iphone 17 Pro",
        precio: 0,
        pdescuento: 1099,
        anualpublication: 2025
      },
      {
        id: "2d",
        img: "../../../assets/iphone16eblack.webp",
        alt: "iphone16e",
        titulo: "Iphone 16e",
        precio: 0,
        pdescuento: 599,
        anualpublication: 2025
      },
      {
        id: "2e",
        img: "../../../assets/airpodspro3.jpg",
        alt: "airpods pro3",
        titulo: "Airpods pro3",
        precio: 0,
        pdescuento: 249,
        anualpublication: 2025
      },
      {
        id: "2f",
        img: "../../../assets/ipadprofinish.webp",
        alt: "ipadpro",
        titulo: "Ipad pro",
        precio: 0,
        pdescuento: 999,
        anualpublication: 2025
      },
      {
        id: "2g",
        img: "../../../assets/watchultra.jpg",
        alt: "watch ultra",
        titulo: "Watch ultra",
        precio: 0,
        pdescuento: 799,
        anualpublication: 2025
      },
      {
        id: "2h",
        img: "../../../assets/watchs11.jpg",
        alt: "apple watch",
        titulo: "Apple watch s11",
        precio: 0,
        pdescuento: 399,
        anualpublication: 2025
      },
      {
        id: "2i",
        img: "../../../assets/ipad-silver-wifi.webp",
        alt: "ipad-silver",
        titulo: "Ipad silver",
        precio: 0,
        pdescuento: 459,
        anualpublication: 2025
      },
       {
        id: "2j",
        img: "../../../assets/homepod-midnigth.png",
        alt: "homepod",
        titulo: "Homepod midnight",
        precio: 0,
        pdescuento: 299,
        anualpublication: 2025
      },
       {
        id: "2j",
        img: "../../../assets/sulicone-case-yellow.jpeg",
        alt: "silicone-case",
        titulo: "Silicone case yellow",
        precio: 0,
        pdescuento: 49,
        anualpublication: 2025
      },
    ]
  }

  tarjetaseleccionada: any = null;
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

}

