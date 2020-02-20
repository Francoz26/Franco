function mostrar()
{

	var contador=0;
	var valor;
	var positivo;
	var negativo;
	var cantpos;
	var cantneg;
	var cantcero;
	var cantpares;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		valor = parseInt(prompt("ingrese un numero"));
		if(valor%2==0)
		{
			cantpares++;
		}
		if(valor == 0)
		{
			cantcero++
		}
		else
		{
			if(valor>=0)
			{
				positivo = positivo + valor;
				cantpos++;
			}
			else
			if(valor<0)
			{
				negativo = negativo + valor;
				cantneg++;
			}
		}
			respuesta = prompt("desea ingresar otro numero?: s/n");
	}


	document.write("Suma de los negativos: " + negativo ).value;
	document.write("Suma de los positivos: " + positivo).value;
	document.write("cantidad de los negativos: " + cantneg).value;
	document.write("cantidad de los positivos: " + cantpos).value;
	document.write("cantidad de ceros: " + cantcero).value;
	document.write("cantidad de pares: " + cantpares).value;
	document.write("promedio de los positivos: " + promediopos).value;
	document.write("promedio de los negativos: " + promedioneg).value;
	document.write("diferencia entre positivos y negativos: ").value;
}//FIN DE LA FUNCIÓN