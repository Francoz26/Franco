function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAnio)
{
    case "Febrero":
    {
        alert("Este mes tiene 28 días");
        break;
    }
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    {
        alert("Estos meses tienen 31 días");
        break;
    }
    default:
    {
        alert("Estos meses tienen 30 días");
        break;
    }
}
	



}//FIN DE LA FUNCIÓN