import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-oferts',
  imports: [CommonModule],
  templateUrl: './oferts.html',
  styleUrls: ['./oferts.css']
})
export class oferts {
  public infotarjeta: Tarjeta[];
  public categoriaSeleccionada: string = '';
  public ordenSeleccionado: string = '';
  tarjetaseleccionada: any = null;

  constructor() {
    this.infotarjeta = [
      { id: "1a", img: "../../../assets/sulicone-case-yellow.jpeg", alt: "silicone case yellow", titulo: "silicone case yellow", precio: 59, pdescuento: 49, anualpublication: 2025 },
      { id: "1b", img: "../../../assets/mac-mini-silver.jpeg", alt: "mac-mini-silver", titulo: "mac mini silver", precio: 599, pdescuento: 549, anualpublication: 2025 },
      { id: "1c", img: "../../../assets/macbook14inch.jpeg", alt: "macbook14inch", titulo: "macbook14inch", precio: 899, pdescuento: 849, anualpublication: 2025 },
      { id: "1d", img: "../../../assets/ipad-silver-wifi.webp", alt: "ipad-silver", titulo: "ipad silver", precio: 499, pdescuento: 449, anualpublication: 2025 },
      { id: "2a", img: "../../../assets/imacpurple24inch.jpeg", alt: "imacpurple24inch", titulo: "imac purple 24 inch", precio: 1199, pdescuento: 1099, anualpublication: 2025 },
      { id: "2b", img: "../../../assets/homepod-mini-blue.jpeg", alt: "homepodmini", titulo: "homepod mini blue", precio: 99, pdescuento: 89, anualpublication: 2025 },
      { id: "2c", img: "../../../assets/homepod-midnigth.png", alt: "homepod midnigth", titulo: "homepod midnigth", precio: 299, pdescuento: 249, anualpublication: 2025 },
      { id: "2d", img: "../../../assets/airtag-4pack.png", alt: "airtag4pack", titulo: "airtag 4 pack", precio: 99, pdescuento: 89, anualpublication: 2025 },
    ];
  }

  // Método para abrir modal
  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

  // Método para filtrar por categoría
  filtrarCategoria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.categoriaSeleccionada = selectElement.value;
  }

  // Método para ordenar por precio
  ordenarPorPrecio(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.ordenSeleccionado = selectElement.value;
  }

  // Getter que devuelve productos filtrados por categoría
  get productosFiltrados() {
    if (!this.categoriaSeleccionada) {
      return this.infotarjeta;
    }
    return this.infotarjeta.filter(p =>
      p.titulo.toLowerCase().includes(this.categoriaSeleccionada.toLowerCase())
    );
  }

  // Getter que aplica ordenamiento sobre los filtrados
  get productosOrdenados() {
    let productos = [...this.productosFiltrados];

    if (this.ordenSeleccionado === 'asc') {
      productos.sort((a, b) => a.pdescuento - b.pdescuento); 
    } else if (this.ordenSeleccionado === 'desc') {
      productos.sort((a, b) => b.pdescuento - a.pdescuento);
    }

    return productos;
  }
}
