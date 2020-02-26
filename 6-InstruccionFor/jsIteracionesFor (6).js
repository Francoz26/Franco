function mostrar()
{
    var cont=0
var num=prompt("Numero","ingresar un numero");
for (var i=1;i<=num;i++)
{
    if((i%2)==0)
    {
        alert("Es par: "+i);
        cont++;
    }
}
alert("Se encontraron " +cont+ " numeros pares");
/*var cont=0
var num=prompt("Numero","ingresar un numero");
for (var i=0;i<=num;i++)
{
    if((i%2)==0)
    {
        alert("Es par: " +i);
        cont++;
    }
}
alert("Se encontraron " +cont+ " numeros pares");
*/

}//FIN DE LA FUNCIÓN