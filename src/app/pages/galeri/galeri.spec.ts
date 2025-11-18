import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-galeri',
  imports: [CommonModule],
  templateUrl: './galeri.html',
  styleUrls: ['./galeri.css']
})
export class galeri {
  public infotarjeta: Tarjeta[];
  public categoriaSeleccionada: string = '';
  public ordenSeleccionado: string = '';
  tarjetaseleccionada: any = null;

  constructor() {
    this.infotarjeta = [
      { id: "1a", img: "../../../assets/iphoneairspaceblack.webp", alt: "iphone Air", titulo: "iphone Air", precio: 999, pdescuento: 0, anualpublication: 2025 },
      { id: "1b", img: "../../../assets/iphone17white.webp", alt: "iphone17", titulo: "iphone 17", precio: 799, pdescuento: 0, anualpublication: 2025 },
      { id: "1c", img: "../../../assets/iphone17prodeepblue.webp", alt: "iphone17pro", titulo: "iphone 17 Pro", precio: 1099, pdescuento: 0, anualpublication: 2025 },
      { id: "1d", img: "../../../assets/iphone16eblack.webp", alt: "iphone16e", titulo: "iphone 16e", precio: 599, pdescuento: 0, anualpublication: 2025 },
      { id: "2a", img: "../../../assets/airpodspro3.jpg", alt: "airpods pro3", titulo: "airpods pro3", precio: 249, pdescuento: 0, anualpublication: 2025 },
      { id: "2b", img: "../../../assets/ipadprofinish.webp", alt: "ipadpro", titulo: "ipad pro", precio: 999, pdescuento: 0, anualpublication: 2025 },
      { id: "2c", img: "../../../assets/watchultra.jpg", alt: "watch ultra", titulo: "watch ultra", precio: 799, pdescuento: 0, anualpublication: 2025 },
      { id: "2d", img: "../../../assets/watchs11.jpg", alt: "apple watch", titulo: "apple watch s11", precio: 399, pdescuento: 0, anualpublication: 2025 },
    ];
  }

  vermas(tarjeta: any) {
    this.tarjetaseleccionada = tarjeta;
  }

  filtrarCategoria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.categoriaSeleccionada = selectElement.value;
  }

  ordenarPorPrecio(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.ordenSeleccionado = selectElement.value;
  }

  get productosFiltrados() {
    if (!this.categoriaSeleccionada) {
      return this.infotarjeta;
    }
    return this.infotarjeta.filter(p =>
      p.titulo.toLowerCase().includes(this.categoriaSeleccionada.toLowerCase())
    );
  }

  get productosOrdenados() {
    let productos = [...this.productosFiltrados];

    if (this.ordenSeleccionado === 'asc') {
      productos.sort((a, b) => a.precio - b.precio);
    } else if (this.ordenSeleccionado === 'desc') {
      productos.sort((a, b) => b.precio - a.precio);
    }

    return productos;
  }
}
