function mostrar()
{

	var contador=0;
	var acumulador=0;
	var positivo=0;
	var negativo=1;
	var valor=0;
	var respuesta='si';
	var acumuladornegativo=0;
	var acumuladorpositivo=0;

	do
	{
		valor= prompt("ingrese un número:");
		while(isNaN(valor))
		{
			valor=prompt("ingrese un número válido:");
		}
		if(valor>=0)
		{
			positivo= parseInt(valor) + parseInt(positivo);
		}
		if(valor<0)
		{
			negativo= parseInt(valor) * parseInt(negativo);
		}
		contador++;
		acumulador = acumulador + parseInt(valor);
		respuesta=prompt("Desea agregar otro número?");
	}while(respuesta!="no")


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
