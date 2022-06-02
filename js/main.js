let agua = 10;
let yerba = 10;
let azucar = 10;
let aguaPrecio = 150;
let yerbaPrecio = 400;
let azucarPrecio = 200;
let descuentoPorcentaje = 0.15;
let iva = 1.21;
let resultado = 0;
let total;

function calcular(a, b) {
  let precio = a * b;
  let descuento = precio * descuentoPorcentaje;
  let subtotal = precio - descuento;
  total = subtotal * iva;
  alert("Precio total $" + total);
  return total;
}
function resultadoTotal() {
  resultado = resultado + total;
}

producto = parseInt(
  prompt(
    "Ingrese un Producto a comprar\n 1. Agua\n 2. Azucar\n 3. Yerba\n 4. Salir\n"
  )
);
while (producto != "") {
  switch (producto) {
    case 1:
      if (agua > 0) {
        cantidad = parseInt(
          prompt(
            "Nos quedan " + agua + " unidades\nCuantas unidades desea comprar?"
          )
        );
        if (cantidad <= agua) {
          agua = agua - cantidad;
          alert("El pedido fue agregado correctamente. Gracias");
          calcular(aguaPrecio, cantidad);
          resultadoTotal();
        } else {
          alert("No tenemos esa cantidad en Stock. Vuelta a intentar");
        }
      }
      break;
    case 2:
      if (azucar > 0) {
        cantidad = parseInt(
          prompt(
            "Nos quedan " +
              azucar +
              " unidades\nCuantas unidades desea comprar?"
          )
        );
        if (cantidad <= azucar) {
          azucar = azucar - cantidad;
          alert("El pedido fue agregado correctamente. Gracias");
          calcular(azucarPrecio, cantidad);
          resultadoTotal();
        } else {
          alert("No tenemos esa cantidad en Stock. Vuelva a intentar");
        }
      }
      break;

    case 3:
      if (yerba > 0) {
        cantidad = parseInt(
          prompt(
            "Nos quedan " + yerba + " unidades\nCuantas unidades desea comprar?"
          )
        );
        if (cantidad <= yerba) {
          yerba = yerba - cantidad;
          alert("El pedido fue agregado correctamente. Gracias");
          calcular(yerbaPrecio, cantidad);
          resultadoTotal();
        } else {
          alert("No tenemos esa cantidad en Stock. Vuelva a intentar");
        }
      }
      break;
    case 4:
      alert(
        `Gracias por visitar nuestra tienda, su gasto total con descuento es de \$${resultado}`
      );
      break;

    default:
      alert("Opción no valida, vuelva a intentar");
      break;
  }
  producto = parseInt(
    prompt(
      "Ingrese un Producto a comprar\n 1. Agua\n 2. Azucar\n 3. Yerba\n 4. Salir\n"
    )
  );
}
