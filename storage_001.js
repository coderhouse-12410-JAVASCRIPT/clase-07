localStorage.setItem("Nombre", "Ale");
var valor1 = localStorage.Nombre;
console.log(valor1);

sessionStorage.setItem("Fecha", "26/01/2021");

var valor2 = sessionStorage.getItem("Fecha");
console.log(valor2);

localStorage.clear();

sessionStorage.removeItem("Fecha");
