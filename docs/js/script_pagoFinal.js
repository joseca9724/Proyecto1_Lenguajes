
var datosP = JSON.parse(localStorage.getItem('pago'));
var datosReserva = JSON.parse(localStorage.getItem('obj'));
//var nombre = document.getElementById('lugar').setAttribute('value', obj.lugar);
//var apellidos = document.getElementById('lugar').setAttribute('value', obj.lugar);

document.getElementById('nomHuespedF').innerText = (datosP.nombre + " " + datosP.apellidos);
document.getElementById('nomLugarF').innerText = (datosReserva.nombre);
document.getElementById('detHuespedF').innerText = (datosReserva.huespedes);
document.getElementById('costoHospF').innerText = ("¢"+datosReserva.costo);
var precio = parseFloat(datosReserva.costo);
var costoServicio = precio*0.08;
var iva = precio*0.13;
var costoLimpieza = precio*0.05;
var total = precio+costoServicio+costoLimpieza+iva;

document.getElementById('servPlatF').innerText = ("¢"+costoServicio);
document.getElementById('limpiezaF').innerText = ("¢"+costoLimpieza);
document.getElementById('IVAF').innerText = ("¢"+iva);
document.getElementById('totalF').innerText = ("¢"+datosP.costo);

