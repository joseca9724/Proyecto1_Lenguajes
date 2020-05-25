/*
if (!localStorage.getItem("huespedL")) {
    populateStorage();
} else {
    getLocalStorage();
    localStorage.clear();
}*/
<<<<<<< HEAD

function btnPagoFin() { 
    location.href = "index.html";
}

var alojamiento1 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Hotel JC", tipo: "Habitación de hotel", img: "img/hotelJC.PNG", descripcion: "Gran hotel 5 estrellas", codigo: 1 };
var alojamiento2 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Casa JC", tipo: "Alojamiento Entero", img: "img/casaJC.PNG", descripcion: "Hermosa casa rustica", codigo: 2 };
var alojamiento3 = { ubicacion: "costa rica,cartago,paraíso", nombre: "Casa Paraíso", tipo: "Habitación privada", img: "img/alojamiento3.PNG", descripcion: "Casa en zona tranquila", codigo: 3 };
var alojamiento4 = { ubicacion: "costa rica,guanacaste,carrillo", nombre: "Cabinas Carrillo", tipo: "Habitación compartida", img: "img/alojamiento4.PNG", descripcion: "Disfruta de magnificas playas", codigo: 4 };
var alojamiento5 = { ubicacion: "costa rica,san josé,san jose", nombre: "Hotel Presidente", tipo: "Habitación de hotel", img: "img/alojamiento5.PNG", descripcion: "Sumergite en la cultura y la vida de San José", codigo: 5 };
var alojamiento6 = { ubicacion: "costa rica,san josé,pérez zeledón", nombre: "Casa Perez", tipo: "Alojamiento Entero", img: "img/alojamiento6.PNG", descripcion: "Gran zona verde", codigo: 6 };
var alojamiento7 = { ubicacion: "costa rica,san josé,escazú", nombre: "Casa Guachipelin", tipo: "Habitación privada", img: "img/alojamiento7.PNG", descripcion: "Lugar tranquilo", codigo: 7 };
var alojamiento8 = { ubicacion: "costa rica,guanacaste,nicoya", nombre: "Hospedaje Fiesta ", tipo: "Habitación compartida", img: "img/alojamiento8.PNG", descripcion: "Hermosas playas cercanas", codigo: 8 };
var alojamiento9 = { ubicacion: "costa rica,limón,limón", nombre: "Selina Puerto Viejo", tipo: "Habitación de hotel", img: "img/alojamiento9.PNG", descripcion: "Diversión asegurada", codigo: 9 };
var alojamiento10 = { ubicacion: "costa rica,heredia,barva", nombre: "Casa Barva", tipo: "Alojamiento Entero", img: "img/alojamiento10.PNG", descripcion: "Espaciosa casa", codigo: 10 };
=======
var alojamiento1 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Hotel El Recreo", tipo: "Habitación de hotel", img: "img/hotelJC.PNG", descripcion: "Gran hotel 5 estrellas", codigo: 1, costo: 20000, maxH: 2, piscina: true ,parqueo:true};
var alojamiento2 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Casa Santa Cruz", tipo: "Alojamiento Entero", img: "img/casaJC.PNG", descripcion: "Hermosa casa rustica", codigo: 2, costo: 10000, maxH: 5, piscina: false ,parqueo:true};
var alojamiento3 = { ubicacion: "costa rica,cartago,paraíso", nombre: "Casa Paraíso", tipo: "Habitación privada", img: "img/alojamiento3.PNG", descripcion: "Casa en zona tranquila", codigo: 3, costo: 15000, maxH: 1, piscina: false ,parqueo:false};
var alojamiento4 = { ubicacion: "costa rica,guanacaste,carrillo", nombre: "Cabinas Carrillo", tipo: "Habitación compartida", img: "img/alojamiento4.PNG", descripcion: "Disfruta de magnificas playas", codigo: 4, costo: 25000, maxH: 4, piscina: true ,parqueo:true};
var alojamiento5 = { ubicacion: "costa rica,san josé,san jose", nombre: "Hotel Presidente", tipo: "Habitación de hotel", img: "img/alojamiento5.PNG", descripcion: "Sumergite en la cultura y la vida de San José", codigo: 5, costo: 15500, maxH: 2, piscina: false ,parqueo:false};
var alojamiento6 = { ubicacion: "costa rica,san josé,pérez zeledón", nombre: "Casa Perez", tipo: "Alojamiento Entero", img: "img/alojamiento6.PNG", descripcion: "Gran zona verde", codigo: 6, costo: 18000, maxH: 5, piscina: false ,parqueo:true};
var alojamiento7 = { ubicacion: "costa rica,san josé,escazú", nombre: "Casa Guachipelin", tipo: "Habitación privada", img: "img/alojamiento7.PNG", descripcion: "Lugar tranquilo", codigo: 7, costo: 28000, maxH: 1, piscina: false ,parqueo:true};
var alojamiento8 = { ubicacion: "costa rica,guanacaste,nicoya", nombre: "Hospedaje Fiesta ", tipo: "Habitación compartida", img: "img/alojamiento8.PNG", descripcion: "Hermosas playas cercanas", codigo: 8, costo: 40000, maxH: 6, piscina: true ,parqueo:true}
var alojamiento9 = { ubicacion: "costa rica,limón,limón", nombre: "Selina Puerto Viejo", tipo: "Habitación de hotel", img: "img/alojamiento9.PNG", descripcion: "Diversión asegurada", codigo: 9, costo: 23000, maxH: 2, piscina: true ,parqueo:true};
var alojamiento10 = { ubicacion: "costa rica,heredia,barva", nombre: "Casa Barva", tipo: "Alojamiento Entero", img: "img/alojamiento10.PNG", descripcion: "Espaciosa casa", codigo: 10, costo: 21000, maxH: 6, piscina: false ,parqueo:true};
>>>>>>> JoseCarlos



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
    var huesped = document.getElementById('huesped').value;
    var hoy = new Date();
    var fecha = new Date(document.getElementById('date-start').value);

    if (lugar == '' || huesped == '' || dateStart == '' || dateEnd == '') {
        document.getElementById('filtrado').innerText = 'Debe llenar todos los espacios para continuar';
    } else if (fecha.getTime() < hoy.getTime()) {
        document.getElementById('filtrado').innerText = 'La fecha de inicio es anterior a la fecha de hoy';
    } else if (dateStart > dateEnd) {
        document.getElementById('filtrado').innerText = 'La fecha de inicio es posterior a la fecha fecha de fin';
    }
    else {
        if (document.getElementsByClassName('cbn')[0].checked) {
            document.getElementById("filtrado").innerHTML = "";
            var bandera = false;
            for (let index = 0; index < listaAlojamientos.length; index++) {
                if (listaAlojamientos[index].ubicacion.indexOf(String(document.getElementById('lugar').value).toLowerCase()) > -1 && listaAlojamientos[index].piscina == true) {
                    var alojamientoNombre = document.createElement("h2");
                    alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
                    document.getElementById("filtrado").append(alojamientoNombre);
                    var descripcion = document.createElement('div');
                    descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion + "<br>" +"¢"+ listaAlojamientos[index].costo + " /por noche";
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

                    var detalles = document.createElement('a');
                    detalles.className = "btn btn-success";
                    detalles.innerHTML = "Ver más detalles";
                    detalles.setAttribute("id", listaAlojamientos[index].codigo);
                    detalles.setAttribute("onclick", 'datos()');
                    detalles.setAttribute("href", "reserva.html");
                    document.getElementById("filtrado").append(detalles);

                    var espacio = document.createElement('hr');
                    espacio.className = "my-4";
                    espacio.style = "margin-left: 2em; margin-right: 2em;";
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
        }else if (document.getElementsByClassName('cbn')[1].checked) {
            document.getElementById("filtrado").innerHTML = "";
            var bandera = false;
            for (let index = 0; index < listaAlojamientos.length; index++) {
                if (listaAlojamientos[index].ubicacion.indexOf(String(document.getElementById('lugar').value).toLowerCase()) > -1 && listaAlojamientos[index].parqueo == true) {
                    var alojamientoNombre = document.createElement("h2");
                    alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
                    document.getElementById("filtrado").append(alojamientoNombre);
                    var descripcion = document.createElement('div');
                    descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion+ "<br>" +"¢"+ listaAlojamientos[index].costo + " /por noche";
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

                    var detalles = document.createElement('a');
                    detalles.className = "btn btn-success";
                    detalles.innerHTML = "Ver más detalles";
                    detalles.setAttribute("id", listaAlojamientos[index].codigo);
                    detalles.setAttribute("onclick", 'datos()');
                    detalles.setAttribute("href", "reserva.html");
                    document.getElementById("filtrado").append(detalles);

                    var espacio = document.createElement('hr');
                    espacio.className = "my-4";
                    espacio.style = "margin-left: 2em; margin-right: 2em;";
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
        else if (document.getElementsByClassName('cbn')[0].checked && document.getElementsByClassName('cbn')[1].checked) {
            document.getElementById("filtrado").innerHTML = "";
            var bandera = false;
            for (let index = 0; index < listaAlojamientos.length; index++) {
                if (listaAlojamientos[index].ubicacion.indexOf(String(document.getElementById('lugar').value).toLowerCase()) > -1 && listaAlojamientos[index].piscina == true && listaAlojamientos[index].parqueo == true) {
                    var alojamientoNombre = document.createElement("h2");
                    alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
                    document.getElementById("filtrado").append(alojamientoNombre);
                    var descripcion = document.createElement('div');
                    descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion+ "<br>" +"¢"+ listaAlojamientos[index].costo + " /por noche";
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

                    var detalles = document.createElement('a');
                    detalles.className = "btn btn-success";
                    detalles.innerHTML = "Ver más detalles";
                    detalles.setAttribute("id", listaAlojamientos[index].codigo);
                    detalles.setAttribute("onclick", 'datos()');
                    detalles.setAttribute("href", "reserva.html");
                    document.getElementById("filtrado").append(detalles);

                    var espacio = document.createElement('hr');
                    espacio.className = "my-4";
                    espacio.style = "margin-left: 2em; margin-right: 2em;";
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
         else {
            document.getElementById("filtrado").innerHTML = "";
            var bandera = false;
            for (let index = 0; index < listaAlojamientos.length; index++) {
                if (listaAlojamientos[index].ubicacion.indexOf(String(document.getElementById('lugar').value).toLowerCase()) > -1) {
                    var alojamientoNombre = document.createElement("h2");
                    alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
                    document.getElementById("filtrado").append(alojamientoNombre);
                    var descripcion = document.createElement('div');
                    descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion+ "<br>" +"¢"+ listaAlojamientos[index].costo + " /por noche";
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

                    var detalles = document.createElement('a');
                    detalles.className = "btn btn-success";
                    detalles.innerHTML = "Ver más detalles";
                    detalles.setAttribute("id", listaAlojamientos[index].codigo);
                    detalles.setAttribute("onclick", 'datos()');
                    detalles.setAttribute("href", "reserva.html");
                    document.getElementById("filtrado").append(detalles);

                    var espacio = document.createElement('hr');
                    espacio.className = "my-4";
                    espacio.style = "margin-left: 2em; margin-right: 2em;";
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



}

/*function getLocalStorage() {
    var hh = localStorage.getItem("huespedL");
    //document.getElementById('huesped').setAttribute();// = hh;
    alert(document.namespaceURI);
}*/


function datos(e) {
    if (!e) {
        e = window.event;
    }
    var cod = e.target.id;

    let obj = {
        codigo: cod,
        lugar: document.getElementById('lugar').value,
        dateStart: document.getElementById('date-start').value,
        dateEnd: document.getElementById('date-end').value,
        huespedes: document.getElementById('huesped').value
    }

    localStorage.setItem("obj", JSON.stringify(obj));

    console.log(localStorage.getItem('obj'));


}

function datosS(e) {
    if (!e) {
        e = window.event;
    }
    var cod = e.target.id;

    let obj = {
        codigo: cod
    }

    localStorage.setItem("obj", JSON.stringify(obj));

    console.log(localStorage.getItem('obj'));
    location.href = "reserva.html";


}

function btnNumSeg() {
    alert('El código de seguridad son los últimos tres dígitos localizados en la banda al reverso de la tarjeta. \nEste es un código de comprobación de los datos y ofrece un mayor grado de seguridad en su registro en línea.');
}

function btnPago() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correoE').value;
    var conCorreo = document.getElementById('conCorreoE').value;
    var direccion = document.getElementById('direccion').value;
    var ciudad = document.getElementById('ciudad').value;
    var provincia = document.getElementById('provincia').value;
    var postal = document.getElementById('postal').value;
    var tarjeta = document.getElementById('numCard').value;
    var codSeg = document.getElementById('numSeg').value;

    var logo = document.createElement("img");
    logo.setAttribute("alt", "logo");
    logo.src = "img/logo.png";
    logo.width = "40";
    logo.height = "50";

    var mySpan = document.createElement("span");
    document.getElementById("divEmptySpace").innerHTML = "";

    if (nombre == '' || apellidos == '' || correo == '' || conCorreo == '' || direccion == '' ||
        ciudad == '' || provincia == '' || postal == '' || tarjeta == '' || codSeg == '') {

        document.getElementById("divEmptySpace").append(logo);
        mySpan.innerHTML = "Es necesario que ingrese toda la información que se le solicita";
        document.getElementById("divEmptySpace").append(mySpan);
    } else {
        postal = parseInt(postal);
        tarjeta = parseInt(tarjeta);
        codSeg = parseInt(codSeg);

        if (isNaN(postal)) {
            document.getElementById("divEmptySpace").append(logo);
            mySpan.innerHTML = "El código postal debe ser en formato numérico";
            document.getElementById("divEmptySpace").append(mySpan);
        } else {
            if (isNaN(tarjeta)) {
                document.getElementById("divEmptySpace").append(logo);
                mySpan.innerHTML = "El número de tarjeta debe ser en formato numérico";
                document.getElementById("divEmptySpace").append(mySpan);
            } else {
                if (isNaN(codSeg)) {
                    document.getElementById("divEmptySpace").append(logo);
                    mySpan.innerHTML = "El código de seguridad debe ser en formato numérico";
                    document.getElementById("divEmptySpace").append(mySpan);
                } else { //codigo de seguridad validado
                    if (correo != conCorreo) {
                        document.getElementById("divEmptySpace").append(logo);
                        mySpan.innerHTML = "Verifique que haya ingresado el correo correctamente";
                        document.getElementById("divEmptySpace").append(mySpan);
                    } else { //correo validado
                        //todas las validaciones fueron ralizadas correctamente

                        sessionStorage.setItem("nombre", nombre);
                        sessionStorage.setItem("apellidos", apellidos);
                        sessionStorage.setItem("correo", correo);
                        sessionStorage.setItem("direccion", direccion);

                        location.href = "pago_final.html";
                    }
                }
            } // numero de tarjeta validado
        }//codio postal validado
    } // validaciones (espacios en blanco)
}
