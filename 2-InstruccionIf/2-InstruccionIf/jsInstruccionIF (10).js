function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num
	var nota
	num = Math.floor(Math.random()*10+1);
	nota = num;
	if(nota>=9&&10)
	{
		alert(num+" Exelente");
	}
	if(nota>=4&&nota<9)
	{
		alert(num+" Aprobó");
	}
	if(nota<4)
	{
		alert(num+" Vamos, la próxima se puede");
	}
}//FIN DE LA FUNCIÓN