function mostrar()
{
var num1 = prompt("ingrese el Primer número","Número 1");
var num2 = prompt("ingrese el Segundo número","Número 2");
var suma = parseInt(num1) + parseInt(num2);
var resta = parseInt(num1) - parseInt(num2);
if(num1 == num2)
{
    alert("es igual el num1: " +num1 + " y el num2: "+num2);
}
else
{
    if(num1 > num2)
    {
        alert("num1 es mayor, la resta es: " +resta);
    }
    else
    {
        if(num1 < num2)
        {
            alert("num1 es menor, la suma es: " +suma);
        }
        if(suma > 10)
            {
                alert("la suma es: "+suma +" y supero el 10")
            }
    }

    
}
}/*
var resta;
var suma;
var num1 = prompt("ingrese el Primer número","Número 1");
var num2 = prompt("ingrese el Segundo número","Número 2");

if(num1 == num2)
{
    alert("es igual el num1: " +num1 + " y el num2: "+num2);
}
else
{
    if(num1 > num2)
    {
	resta = parseInt(num1) - parseInt(num2);
	alert("num1 es mayor, la resta es: " +resta);
    }
    else
    {
        if(num1 < num2)
        {
		suma = parseInt(num1) + parseInt(num2);
		alert("num1 es menor, la suma es: " +suma);
        }
        if(suma > 10)
            {
                alert("la suma es: "+suma +" y supero el 10")
            }
    }

    
}

}*/