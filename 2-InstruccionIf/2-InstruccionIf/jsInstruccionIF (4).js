function mostrar()
{
//tomo la edad  
var edad
edad = document.getElementById("edad").value;
if(edad>=13)
if(edad<=17)
{
    alert("usted es un adolescente");
}
if(edad>18)
{
    alert("usted es mayor de edad");
}
if(edad<13)
{
    alert("usted es menor de edad");
}
}//FIN DE LA FUNCIÓN