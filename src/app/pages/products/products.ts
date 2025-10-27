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
        img: "../../../assets/iphoneairspaceblack.webp",
        alt: "iphone Air",
        titulo: "iphone Air",
        descripcion: "iphone Air a la venta",
        anualpublication: 2025
      },
      {
        id: "1b",
        img: "../../../assets/iphone17white.webp",
        alt: "iphone17",
        titulo: "iphone 17",
        descripcion: "iphone 17 a la venta",
        anualpublication: 2025
      },
      {
        id: "1c",
        img: "../../../assets/iphone17prodeepblue.webp",
        alt: "iphone17pro",
        titulo: "iphone 17 Pro",
        descripcion: "iphone 17 pro a la venta",
        anualpublication: 2025
      },
      {
        id: "1d",
        img: "../../../assets/iphone16eblack.webp",
        alt: "iphone16e",
        titulo: "iphone 16e",
        descripcion: "iphone 16e a la venta",
        anualpublication: 2025
      },
      {
        id: "2a",
        img: "../../../assets/airpodspro3.jpg",
        alt: "airpods pro3",
        titulo: "airpods pro3",
        descripcion: "airpods pro3 a la venta",
        anualpublication: 2025
      },
      {
        id: "2b",
        img: "../../../assets/ipadprofinish.webp",
        alt: "ipadpro",
        titulo: "ipad pro",
        descripcion: "ipad pro a la venta",
        anualpublication: 2025
      },
      {
        id: "2c",
        img: "../../../assets/macbookpro11.png",
        alt: "macbook pro",
        titulo: "macbook pro",
        descripcion: "macbook pro a la venta",
        anualpublication: 2025
      },
      {
        id: "2d",
        img: "../../../assets/s11case.jpg",
        alt: "apple watch",
        titulo: "apple watch s11",
        descripcion: "apple watch s11 a la venta",
        anualpublication: 2025
      },
    ]
  }

  tarjetaseleccionada: any = null;
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

}
