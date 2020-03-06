function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0;
	var respuesta;
do
{
	valor =prompt("ingrese un número");
	while(isNaN(valor))
	{
		valor = prompt("ingrese un número válido");
	}
	contador++;
	acumulador= acumulador + parseInt(valor);
	respuesta = prompt("desea agregar otro número?");
}while(respuesta!="no");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN