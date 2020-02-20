function mostrar()
{

	var contador=0;
	// declarar variables
	var valor
	var respuesta='si';
	var Max
	var Min

	valor = prompt("ingrese un número");
	Max = valor;
	Min = valor;
	respuesta = prompt("¿Desea ingresar otro número?");
	while(respuesta!='no')
	{
		valor = prompt("ingrese un número:");

		if(valor>Max)
		{
			Max = valor;
		}
		if(valor<Min)
		{
			Min = valor
		}
		respuesta = prompt("¿Desea ingresar otro número?");
	}
	document.getElementById("minimo").value = Min;
	document.getElementById("maximo").value = Max;




}//FIN DE LA FUNCIÓN