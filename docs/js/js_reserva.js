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



var listaAlojamientos = [alojamiento1, alojamiento2, alojamiento3, alojamiento4, alojamiento5, alojamiento6, alojamiento7, alojamiento8, alojamiento9, alojamiento10];
var obj = JSON.parse(localStorage.getItem('obj'));
console.log(obj);

var x = parseInt(obj.codigo);
var index = x-1;
switch (x) {
    case 1:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/img1-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img1-2.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img1-3.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 2:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/img2-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img2-2.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img2-3.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 3:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/alojamiento3.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img3-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img3-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 4:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/alojamiento4.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img4-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img4-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 5:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/alojamiento5.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img5-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img5-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 6:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/img6-3.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img6-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img6-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 7:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/img7-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img7-2.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img7-3.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 8:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/img8-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img8-2.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img8-3.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
    case 9:
        document.getElementById('lugar').setAttribute('value', obj.lugar);
        document.getElementById('date-start').setAttribute('value', obj.dateStart);
        document.getElementById('date-end').setAttribute('value', obj.dateEnd);
        document.getElementById('huesped').setAttribute('value', obj.huespedes);

        var alojamientoNombre = document.createElement("h2");
        alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
        document.getElementById("reserva").append(alojamientoNombre);
        var descripcion = document.createElement('div');
        descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
        document.getElementById("reserva").append(descripcion);

        document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/alojamiento9.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img9-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img9-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'

        var salto = document.createElement("br");
        document.getElementById("reserva").append(salto);

        var alojamientoNombre = document.createElement("h4");
        alojamientoNombre.innerHTML = "Servicios";
        document.getElementById("servicios").append(alojamientoNombre);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wifi");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Wi-Fi");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-wind");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Aire Acondicionado");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-swimmer");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-hot-tub");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Piscina");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-parking");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" Parqueo ");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        var icono = document.createElement('i');
        icono.setAttribute("class", "fas fa-tv");
        document.getElementById("servicios").append(icono);
        document.getElementById("servicios").append(" TV");

        var salto = document.createElement("br");
        document.getElementById("servicios").append(salto);

        document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'


        break;
        case 10:
            document.getElementById('lugar').setAttribute('value', obj.lugar);
            document.getElementById('date-start').setAttribute('value', obj.dateStart);
            document.getElementById('date-end').setAttribute('value', obj.dateEnd);
            document.getElementById('huesped').setAttribute('value', obj.huespedes);
            console.log(listaAlojamientos[x]);
    
            var alojamientoNombre = document.createElement("h2");
            alojamientoNombre.innerHTML = listaAlojamientos[index].nombre;
            document.getElementById("reserva").append(alojamientoNombre);
            var descripcion = document.createElement('div');
            descripcion.innerHTML = listaAlojamientos[index].tipo + "<br>" + listaAlojamientos[index].descripcion;
            document.getElementById("reserva").append(descripcion);
    
            document.getElementById("carrusel").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="img/alojamiento10.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img10-1.PNG" class="d-block w-100" alt="..."></div><div class="carousel-item"><img src="img/img10-2.PNG" class="d-block w-100" alt="..."></div></div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>'
    
            var salto = document.createElement("br");
            document.getElementById("reserva").append(salto);
    
            var alojamientoNombre = document.createElement("h4");
            alojamientoNombre.innerHTML = "Servicios";
            document.getElementById("servicios").append(alojamientoNombre);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-wifi");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" Wi-Fi");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-wind");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" Aire Acondicionado");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-swimmer");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" Piscina");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-hot-tub");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" Piscina");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-parking");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" Parqueo ");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            var icono = document.createElement('i');
            icono.setAttribute("class", "fas fa-tv");
            document.getElementById("servicios").append(icono);
            document.getElementById("servicios").append(" TV");
    
            var salto = document.createElement("br");
            document.getElementById("servicios").append(salto);
    
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    
    
            break;
    default:
    // code block
}