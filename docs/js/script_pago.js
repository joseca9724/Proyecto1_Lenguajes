
var datosReserva = JSON.parse(localStorage.getItem('obj'));

document.getElementById('nomLugar').innerText = (datosReserva.nombre);
document.getElementById('detHuesped').innerText = (datosReserva.huespedes);
document.getElementById('costoHosp').innerText = ("¢"+datosReserva.costo);
var precio = parseFloat(datosReserva.costo);
var costoServicio = precio*0.08;
var iva = precio*0.13;
var costoLimpieza = precio*0.05;
var total = precio+costoServicio+costoLimpieza+iva;

document.getElementById('servPlat').innerText = ("¢"+costoServicio);
document.getElementById('limpieza').innerText = ("¢"+costoLimpieza);
document.getElementById('IVA').innerText = ("¢"+iva);
document.getElementById('total').innerText = ("¢"+total);



function Pago() {

    let obj = {
        //codigo: cod,
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        costo: document.getElementById('total').value
        //huespedes: document.getElementById('huesped').value
    }

    localStorage.setItem("pago",JSON.stringify(obj));

    console.log(localStorage.getItem('pago'));


  }

  function btn2000(){
    total= total+2000;
    document.getElementById('total').innerText = ("¢"+total);
    alert("Bono de apoyo efectuado");
  }
  function btn5000(){
    total= total+5000;
    document.getElementById('total').innerText = ("¢"+total);
    alert("Bono de apoyo efectuado");
  }
  function btn10000(){
    total= total+10000;
    document.getElementById('total').innerText = ("¢"+total);
    alert("Bono de apoyo efectuado");
  }
  function btn15000(){
    total= total+15000;
    document.getElementById('total').innerText = ("¢"+total);
    alert("Bono de apoyo efectuado");
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

                        let obj = {
                            
                            nombre: document.getElementById('nombre').value,
                            apellidos: document.getElementById('apellidos').value,
                            costo: total
                            
                        }
                    
                        localStorage.setItem("pago",JSON.stringify(obj));
                        
                        location.href = "pago_final.html";
                    }
                }
            } // numero de tarjeta validado
        }//codio postal validado
    } // validaciones (espacios en blanco)
}



