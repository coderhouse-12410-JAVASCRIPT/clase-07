var myData = '{ "Nombre": "Ale","Fecha": "26/01/2021","Datos": [ 1,3,5 ],"DNI": 12312313}';

var myStoredData = localStorage.getItem("MyData");

var jsonObject = JSON.parse(myData);

console.log(jsonObject.Nombre);

console.log(jsonObject["Nombre"]);

console.log(jsonObject.DNI);

jsonObject.DNI = 12313131;

localStorage.setItem("MyData", JSON.stringify(jsonObject));