function mostrar()
{
var precio
var descuento
var total
precio =prompt("precio");
descuento =prompt("descuento");
total = precio - (precio*descuento/100);
document.getElementById("elPrecioFinal").value = precio&&descuento;
}
