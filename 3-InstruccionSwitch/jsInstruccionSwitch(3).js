function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAnio)
{
    case "Febrero":
    {

    alert("Este mes no tiene más de 29 días");
    break;
    }

default:
        alert("Este mes tiene 30 días o más");

}	


}//FIN DE LA FUNCIÓN