let precioProducto: number = Number(prompt("Ingrese precio del producto"));
console.log("El precio del producto es:", precioProducto);

let cantidadDeProducto: number = Number(prompt("Ingrese la cantidad"));
console.log("la cantidad es:", cantidadDeProducto);

let compratotal: number = precioProducto * cantidadDeProducto;
let descuento: number = compratotal * 0.1;
let compraConDescuento: number = compratotal - descuento;

if (compratotal > 1000) {
  console.log("Compra total con descuento del 10%:" + compraConDescuento);
} else {
  console.log("Compra total:" + compratotal);
}
