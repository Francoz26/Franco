function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var valor=0
	do
	{
		valor = prompt("ingrese un Número");
		acumulador = acumulador + parseInt(valor);
		contador++;
		respuesta = prompt("¿desea ingresar otro número?");
	} while(respuesta == "si" || respuesta == "SI")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN