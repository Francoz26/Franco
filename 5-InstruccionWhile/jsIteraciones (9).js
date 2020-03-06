function mostrar()
{

	var contador=0;
	// declarar variables
	var Max=0;
	var Min=0;
	var valor;	
	var respuesta='si';

	while(respuesta!='no')
	{
		Max=valor;
		Min=valor;
		valor=prompt("ingrese un número:");
		while(isNaN(valor))
		{
			valor=prompt("ingrese un número válido:");
		}
		respuesta=prompt("desea ingresar otro número?");
	}
	if(valor<Max)
	{
		Max=valor;
	}
	if(valor>Min)
	{
		Min=valor;
	}
	Max=document.getElementById('maximo').value=Max;
	Min=document.getElementById('minimo').value=Min;
}//FIN DE LA FUNCIÓN