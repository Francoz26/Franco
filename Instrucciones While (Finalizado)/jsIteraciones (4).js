function mostrar()
{

	var numero = document.getElementById("Numero").value = prompt("ingrese un número entre 0 y 10.");
	while(numero<0 || numero>9)
	{
		var numero = prompt("ingrese el número entre 0 y 10.");
	}
	alert("número en el rango correcto");

}//FIN DE LA FUNCIÓN