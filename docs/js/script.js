/*
if (!localStorage.getItem("huespedL")) {
    populateStorage();
} else {
    getLocalStorage();
    localStorage.clear();
}*/

var alojamiento1 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Hotel JC", tipo: "Habitación de hotel", img: "img/hotelJC.PNG", descripcion: "Gran hotel 5 estrellas", codigo: 1 };
var alojamiento2 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Casa JC", tipo: "Alojamiento Entero", img: "img/casaJC.PNG", descripcion: "Hermosa casa rustica", codigo: 2 };
var alojamiento3 = { ubicacion: "costa rica,cartago,paraiso", nombre: "Casa Paraíso", tipo: "Habitación privada", img: "img/alojamiento3.PNG", descripcion: "Casa en zona tranquila", codigo: 3 };
var alojamiento4 = { ubicacion: "costa rica,guanacaste,carrillo", nombre: "Cabinas Carrillo", tipo: "Habitación compartida", img: "img/alojamiento4.PNG", descripcion: "Disfruta de magnificas playas", codigo: 4 };
var alojamiento5 = { ubicacion: "costa rica,san josé,san jose", nombre: "Hotel Presidente", tipo: "Habitación de hotel", img: "img/alojamiento5.PNG", descripcion: "Sumergite en la cultura y la vida de San José", codigo: 5 };
var alojamiento6 = { ubicacion: "costa rica,san josé,pérez zeledón", nombre: "Casa Perez", tipo: "Alojamiento Entero", img: "img/alojamiento6.PNG", descripcion: "Gran zona verde", codigo: 6 };
var alojamiento7 = { ubicacion: "costa rica,san josé,escazú", nombre: "Casa Guachipelin", tipo: "Habitación privada", img: "img/alojamiento7.PNG", descripcion: "Lugar tranquilo", codigo: 7 };
var alojamiento8 = { ubicacion: "costa rica,guanacaste,nicoya", nombre: "Hospedaje Fiesta ", tipo: "Habitación compartida", img: "img/alojamiento8.PNG", descripcion: "Hermosas playas cercanas", codigo: 8 };
var alojamiento9 = { ubicacion: "costa rica,limón,limón", nombre: "Selina Puerto Viejo", tipo: "Habitación de hotel", img: "img/alojamiento9.PNG", descripcion: "Diversión asegurada", codigo: 9 };
var alojamiento10 = { ubicacion: "costa rica,heredia,barva", nombre: "Casa Barva", tipo: "Alojamiento Entero", img: "img/alojamiento10.PNG", descripcion: "Espaciosa casa", codigo: 10 };



var listaAlojamientos = [alojamiento1, alojamiento2, alojamiento3, alojamiento4, alojamiento5, alojamiento6, alojamiento7, alojamiento8, alojamiento9, alojamiento10];
function btnReservaClick() {

    /*var huesped = parseInt(document.getElementById('huesped').value, 10);
    var lugar = document.getElementById('lugar').value;
    var dateStart = document.getElementById('date-start').value;
    var dateEnd = document.getElementById('date-end').value;
        
    if (lugar == '' || huesped == '' || dateStart == '' || dateEnd == '') {
        document.getElementById('EmptySpace').innerText = 'Debe llenar todos los espacios para continuar';
    } else {
        if (isNaN(huesped)) {
            document.getElementById('EmptySpace').innerText = 'En el espacio <Huéspedes> solo debe ingresar números';
        } else {
            localStorage.setItem("huespedL", huesped);
            localStorage.setItem("lugarL", lugar);
            localStorage.setItem("dStartL", dateStart);
            location.href = "reserva.html";
        }
    }
    */

   var lugar = document.getElementById('lugar').value;
   var dateStart = document.getElementById('date-start').value;
   var dateEnd = document.getElementById('date-end').value;
   
    if (lugar == '' || huesped == '' || dateStart == '' || dateEnd == '') {
        document.getElementById('EmptySpace').innerText = 'Debe llenar todos los espacios para continuar';
    } else {
        document.getElementById("filtrado").innerHTML = "";
        var bandera = false;
        for (let index = 0; index < listaAlojamientos.length; index++) {
            if (listaAlojamientos[index].ubicacion.indexOf(String(document.getElementById('lugar').value).toLowerCase()) > -1) {
                var alojamientoNombre = document.createElement("h2");
                alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
                document.getElementById("filtrado").append(alojamientoNombre);
                var descripcion = document.createElement('div');
                descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
                document.getElementById("filtrado").append(descripcion);

                var logo = document.createElement("img");
                logo.setAttribute("alt", "logo");
                logo.src = listaAlojamientos[index].img;
                logo.width = "200";
                logo.height = "200";
                logo.setAttribute("style", "margin-top: 20px; margin-bottom: 20px");
                document.getElementById("filtrado").append(logo);

                var salto = document.createElement("br");
                document.getElementById("filtrado").append(salto);

                var detalles = document.createElement('button');
                detalles.className = "btn btn-success";
                detalles.innerHTML = "Ver más detalles";
                document.getElementById("filtrado").append(detalles);

                var espacio = document.createElement('hr');
                espacio.className = "my-4";
                document.getElementById("filtrado").append(espacio);

                bandera = true;
            }
        }


        if (bandera) {
            ;
        }
        else {
            document.getElementById('filtrado').innerText = 'Lo sentimos, no contamos con un alojamiento cerca de su destino';
        }
    }



}

/*function getLocalStorage() {
    var hh = localStorage.getItem("huespedL");
    //document.getElementById('huesped').setAttribute();// = hh;
    alert(document.namespaceURI);
}*/



