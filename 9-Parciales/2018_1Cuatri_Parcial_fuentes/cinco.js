function mostrar()
{
var sistemasolar = prompt("sitema solar","ingrese un planeta");
switch(sistemasolar)
{
    case "mercurio":
    case "venus":
        {
            alert("acá hace más calor");
            break;
        }
    case "tierra":
        {
            alert("acá vivimos");
            break;
        }
    case "marte":
    case "júpiter":
    case "saturno":
    case "urano":
    case "neptuno":
    {
        alert("acá hace más frío");
        break;
    }
    default:
        {
            alert("no es un planeta valido");
            break;
        }
}
}
