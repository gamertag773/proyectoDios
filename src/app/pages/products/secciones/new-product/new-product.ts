import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',          // Nombre del selector que se usa en el HTML para invocar este componente
  imports: [ReactiveFormsModule],       // Importa el módulo de formularios reactivos de Angular
  templateUrl: './new-product.html',    // Archivo HTML asociado al componente
  styleUrl: './new-product.css'         // Archivo CSS asociado al componente
})
export class NewProduct {
  /* propiedad privada -> información sensible */
  private contadorId = 1;               // Contador interno para asignar IDs únicos a cada producto

  // Colección de productos de tipo Producto (según la interfaz importada)
  coleccionProductos: Producto[] = [];

  // Instancia de FormGroup que se vincula con el formulario en el HTML
  // Cada campo se define con un FormControl y sus validaciones
  nuevoproducto = new FormGroup({
    nombre: new FormControl('', Validators.required),        // Campo obligatorio de tipo texto
    descripcion: new FormControl('', Validators.required),   // Campo obligatorio de tipo texto
    precio: new FormControl(null, Validators.required),      // Campo obligatorio de tipo numérico
    imagen: new FormControl(''),
    nombreimagen: new FormControl(''),  // Campo opcional para la URL de la imagen

    alt: new FormControl(''),                                // Campo opcional para el texto alternativo de la imagen
  });

  /**
   * @description Método que crea un nuevo producto según la interfaz Producto
   */
  crearProducto(): void {
    // Verifica si el formulario es válido antes de crear el producto
    if (this.nuevoproducto.valid) {
      const nuevoproducto: Producto = {
        // ID autoincremental usando el contador privado
        id: this.contadorId++,
        // Asigna los valores ingresados en el formulario a las propiedades del producto
        nombre: this.nuevoproducto.value.nombre!,
        descripcion: this.nuevoproducto.value.descripcion!,
        precio: this.nuevoproducto.value.precio!,
        imagen: this.nuevoproducto.value.imagen!,
        nombreimagen: this.nuevoproducto.value.nombreimagen!,
        alt: this.nuevoproducto.value.alt!,
      };

      // Agrega el nuevo producto a la colección
      this.coleccionProductos.push(nuevoproducto);

      // Muestra en consola el producto agregado y la colección actual
      console.log('producto agregado:', nuevoproducto);
      console.log('coleccion actual de productos:', this.coleccionProductos);

      // Resetea el formulario para limpiar los campos
      this.nuevoproducto.reset();
    }
  }
}
