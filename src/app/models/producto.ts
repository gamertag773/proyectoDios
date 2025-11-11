export interface Producto {
    id:number; //id tipo number para que puedda ser auto incrementable
    nombre:string; //numeros y letras
    precio:number; //numeros
    pdescuento:number;
    descripcion:string;
    imagen?:string;
    nombreimagen:string;
    alt?:string;
}
