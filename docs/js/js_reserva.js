var alojamiento1 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Hotel El Recreo", tipo: "Habitación de hotel", img: "img/hotelJC.PNG", descripcion: "Gran hotel 5 estrellas", codigo: 1, costo: 20000 };
var alojamiento2 = { ubicacion: "costa rica,cartago,turrialba", nombre: "Casa Santa Cruz", tipo: "Alojamiento Entero", img: "img/casaJC.PNG", descripcion: "Hermosa casa rustica", codigo: 2, costo: 20000 };
var alojamiento3 = { ubicacion: "costa rica,cartago,paraíso", nombre: "Casa Paraíso", tipo: "Habitación privada", img: "img/alojamiento3.PNG", descripcion: "Casa en zona tranquila", codigo: 3, costo: 20000 };
var alojamiento4 = { ubicacion: "costa rica,guanacaste,carrillo", nombre: "Cabinas Carrillo", tipo: "Habitación compartida", img: "img/alojamiento4.PNG", descripcion: "Disfruta de magnificas playas", codigo: 4, costo: 20000 };
var alojamiento5 = { ubicacion: "costa rica,san josé,san jose", nombre: "Hotel Presidente", tipo: "Habitación de hotel", img: "img/alojamiento5.PNG", descripcion: "Sumergite en la cultura y la vida de San José", codigo: 5, costo: 20000 };
var alojamiento6 = { ubicacion: "costa rica,san josé,pérez zeledón", nombre: "Casa Perez", tipo: "Alojamiento Entero", img: "img/alojamiento6.PNG", descripcion: "Gran zona verde", codigo: 6, costo: 20000 };
var alojamiento7 = { ubicacion: "costa rica,san josé,escazú", nombre: "Casa Guachipelin", tipo: "Habitación privada", img: "img/alojamiento7.PNG", descripcion: "Lugar tranquilo", codigo: 7, costo: 20000 };
var alojamiento8 = { ubicacion: "costa rica,guanacaste,nicoya", nombre: "Hospedaje Fiesta ", tipo: "Habitación compartida", img: "img/alojamiento8.PNG", descripcion: "Hermosas playas cercanas", codigo: 8, costo: 20000 };
var alojamiento9 = { ubicacion: "costa rica,limón,limón", nombre: "Selina Puerto Viejo", tipo: "Habitación de hotel", img: "img/alojamiento9.PNG", descripcion: "Diversión asegurada", codigo: 9, costo: 20000 };
var alojamiento10 = { ubicacion: "costa rica,heredia,barva", nombre: "Casa Barva", tipo: "Alojamiento Entero", img: "img/alojamiento10.PNG", descripcion: "Espaciosa casa", codigo: 10, costo: 20000 };



var listaAlojamientos = [alojamiento1, alojamiento2, alojamiento3, alojamiento4, alojamiento5, alojamiento6, alojamiento7, alojamiento8, alojamiento9, alojamiento10];
var obj = JSON.parse(localStorage.getItem('obj'));
console.log(obj);

var x = parseInt(obj.codigo);
var index = x - 1;
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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590367540216!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1168.5179921229087!2d-83.69486166750323!3d9.899745684629043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.89992!2d-83.6945459!5e0!3m2!1sen!2scr!4v1590318783290!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }

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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d7859.232125698927!2d-83.73841448982344!3d9.965866465944448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9650534!2d-83.73755129999999!5e0!3m2!1sen!2scr!4v1590369944567!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d7859.232125698927!2d-83.73841448982344!3d9.965866465944448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9650534!2d-83.73755129999999!5e0!3m2!1sen!2scr!4v1590369944567!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d7859.232125698927!2d-83.73841448982344!3d9.965866465944448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9650534!2d-83.73755129999999!5e0!3m2!1sen!2scr!4v1590369944567!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2452.7042754734916!2d-83.87008421218292!3d9.842946368243952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.842851399999999!2d-83.8692717!5e0!3m2!1sen!2scr!4v1590370414103!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2452.7042754734916!2d-83.87008421218292!3d9.842946368243952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.842851399999999!2d-83.8692717!5e0!3m2!1sen!2scr!4v1590370414103!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2452.7042754734916!2d-83.87008421218292!3d9.842946368243952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.842851399999999!2d-83.8692717!5e0!3m2!1sen!2scr!4v1590370414103!5m2!1sen!2scr" width="200" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14279.755198121487!2d-85.49199241697885!3d9.875072056474338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.87497!2d-85.488799!5e0!3m2!1sen!2scr!4v1590370545136!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14279.755198121487!2d-85.49199241697885!3d9.875072056474338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.87497!2d-85.488799!5e0!3m2!1sen!2scr!4v1590370545136!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14279.755198121487!2d-85.49199241697885!3d9.875072056474338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.87497!2d-85.488799!5e0!3m2!1sen!2scr!4v1590370545136!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4006.4083406098093!2d-84.07648167714558!3d9.93342703794073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0e3614d7734fd%3A0x8a368cc9ce14fa02!2sHotel%20Presidente%2C%20Catedral%2C%20San%20Jos%C3%A9%20Province%2C%20San%20Jos%C3%A9!3m2!1d9.9335363!2d-84.0756148!5e0!3m2!1sen!2scr!4v1590370657822!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4006.4083406098093!2d-84.07648167714558!3d9.93342703794073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0e3614d7734fd%3A0x8a368cc9ce14fa02!2sHotel%20Presidente%2C%20Catedral%2C%20San%20Jos%C3%A9%20Province%2C%20San%20Jos%C3%A9!3m2!1d9.9335363!2d-84.0756148!5e0!3m2!1sen!2scr!4v1590370657822!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4006.4083406098093!2d-84.07648167714558!3d9.93342703794073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0e3614d7734fd%3A0x8a368cc9ce14fa02!2sHotel%20Presidente%2C%20Catedral%2C%20San%20Jos%C3%A9%20Province%2C%20San%20Jos%C3%A9!3m2!1d9.9335363!2d-84.0756148!5e0!3m2!1sen!2scr!4v1590370657822!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2125.966960899058!2d-83.63611337378268!3d9.354674557402957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa14e24f4b4979b%3A0x579ba03c05e588ff!2zU2FuIEpvc8OpIFByb3ZpbmNlLCBQw6lyZXogWmVsZWTDs24!3m2!1d9.35473!2d-83.63484299999999!5e0!3m2!1sen!2scr!4v1590370770100!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2125.966960899058!2d-83.63611337378268!3d9.354674557402957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa14e24f4b4979b%3A0x579ba03c05e588ff!2zU2FuIEpvc8OpIFByb3ZpbmNlLCBQw6lyZXogWmVsZWTDs24!3m2!1d9.35473!2d-83.63484299999999!5e0!3m2!1sen!2scr!4v1590370770100!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2125.966960899058!2d-83.63611337378268!3d9.354674557402957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa14e24f4b4979b%3A0x579ba03c05e588ff!2zU2FuIEpvc8OpIFByb3ZpbmNlLCBQw6lyZXogWmVsZWTDs24!3m2!1d9.35473!2d-83.63484299999999!5e0!3m2!1sen!2scr!4v1590370770100!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4936.908519476093!2d-84.1626263464211!3d9.945205997210111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9440482!2d-84.162154!5e0!3m2!1sen!2scr!4v1590371177669!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4936.908519476093!2d-84.1626263464211!3d9.945205997210111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9440482!2d-84.162154!5e0!3m2!1sen!2scr!4v1590371177669!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4936.908519476093!2d-84.1626263464211!3d9.945205997210111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d9.9440482!2d-84.162154!5e0!3m2!1sen!2scr!4v1590371177669!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d447922.2977343174!2d-85.3455776152703!3d10.104338354204925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d10.161693099999999!2d-85.26220119999999!5e0!3m2!1sen!2scr!4v1590371329118!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d447922.2977343174!2d-85.3455776152703!3d10.104338354204925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d10.161693099999999!2d-85.26220119999999!5e0!3m2!1sen!2scr!4v1590371329118!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d447922.2977343174!2d-85.3455776152703!3d10.104338354204925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d10.161693099999999!2d-85.26220119999999!5e0!3m2!1sen!2scr!4v1590371329118!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62932.56490426459!2d-82.77835837658382!3d9.656645346812018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa6518a701654cb%3A0x56c637fd43c800ac!2sSelina%20Hostel%20Puerto%20Viejo%2C%20256%20street%20800%20mts%20south%20of%20Puerto%20Viejo%20on%20the%20way%20to%20Playa%2C%20Lim%C3%B3n%2C%20Puerto%20Viejo%20de%20Talamanca%2C%2070403!3m2!1d9.6565625!2d-82.7433386!5e0!3m2!1sen!2scr!4v1590371415134!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62932.56490426459!2d-82.77835837658382!3d9.656645346812018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa6518a701654cb%3A0x56c637fd43c800ac!2sSelina%20Hostel%20Puerto%20Viejo%2C%20256%20street%20800%20mts%20south%20of%20Puerto%20Viejo%20on%20the%20way%20to%20Playa%2C%20Lim%C3%B3n%2C%20Puerto%20Viejo%20de%20Talamanca%2C%2070403!3m2!1d9.6565625!2d-82.7433386!5e0!3m2!1sen!2scr!4v1590371415134!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62932.56490426459!2d-82.77835837658382!3d9.656645346812018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa6518a701654cb%3A0x56c637fd43c800ac!2sSelina%20Hostel%20Puerto%20Viejo%2C%20256%20street%20800%20mts%20south%20of%20Puerto%20Viejo%20on%20the%20way%20to%20Playa%2C%20Lim%C3%B3n%2C%20Puerto%20Viejo%20de%20Talamanca%2C%2070403!3m2!1d9.6565625!2d-82.7433386!5e0!3m2!1sen!2scr!4v1590371415134!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


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

        if (screen.width > 800) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4950.229963519008!2d-84.12370074844144!3d10.016856282311146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0fa9900780687%3A0xe17f9a4b45810ea2!2sHeredia%2C%20Barva!3m2!1d10.0190909!2d-84.1237232!5e0!3m2!1sen!2scr!4v1590371817706!5m2!1sen!2scr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        } else if (screen.width < 800 && screen.width > 400) {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4950.229963519008!2d-84.12370074844144!3d10.016856282311146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0fa9900780687%3A0xe17f9a4b45810ea2!2sHeredia%2C%20Barva!3m2!1d10.0190909!2d-84.1237232!5e0!3m2!1sen!2scr!4v1590371817706!5m2!1sen!2scr" width="400" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }
        else {
            document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4950.229963519008!2d-84.12370074844144!3d10.016856282311146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x8fa0fa9900780687%3A0xe17f9a4b45810ea2!2sHeredia%2C%20Barva!3m2!1d10.0190909!2d-84.1237232!5e0!3m2!1sen!2scr!4v1590371817706!5m2!1sen!2scr" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        }


        break;
    default:
    // code block
}

function reservar() {
    var x = JSON.parse(localStorage.getItem('obj'));
    let obj = {
        codigo: x.codigo,
        lugar: document.getElementById('lugar').value,
        nombre: listaAlojamientos[x.codigo - 1].nombre,
        dateStart: document.getElementById('date-start').value,
        dateEnd: document.getElementById('date-end').value,
        huespedes: document.getElementById('huesped').value,
        costo: listaAlojamientos[x.codigo - 1].costo
    }

    localStorage.setItem("obj", JSON.stringify(obj));

    location.href = "pago.html";

    console.log(localStorage.getItem('obj'));
}
