function mostrar()
{

    var i;
    var num=prompt("Numero","Ingrese un numero");
    var flag=true;
    for(var i=2;i<=num-1;i++)
    {
        if(num%i==0)
        {
            flag=false;
        }
    }
    if(flag==true)
    {
        alert("El numero "+num+" es primo");
    }
    else
    {
        alert("El numero "+num+" NO es primo");
    }
/*
var i
var num
var flag=true;
for(var i=2;i<=num;i++)
{
    if(num%i==0)
    {
        flag=false;
    }
}
if(flag==true)
{
    alert("El numero "+num+" es primo");
}
else
{
    alert("El numero "+num+" NO es primo");
}
*/

}//FIN DE LA FUNCIÓN