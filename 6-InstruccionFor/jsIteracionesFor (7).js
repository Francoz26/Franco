function mostrar()
{
var cont=0
var num=prompt("Numero","ingresar un numero");
for (var i=1;i<=num;i++)
{
    if((num%i)==0)
    {
        alert("Es divisor: "+i);
        cont++;
    }
}
alert("Se encontraron " +cont+ " divisores");



}//FIN DE LA FUNCIÓN