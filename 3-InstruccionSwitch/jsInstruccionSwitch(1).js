function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;
switch(mesDelAnio)
{
    case "Enero" :
        alert("¡Que comineces bien el año!");
        break;
    case "Marzo" :
        alert("¡¡¡A clases!!!");
        break;
    case "Julio" :
        alert("Se vienen las vacaciones");
        break;
    case "Diciembre" :
        alert("¡Felices Fiestas");
        break;
}
}//FIN DE LA FUNCIÓN