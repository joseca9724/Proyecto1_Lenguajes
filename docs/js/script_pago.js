function showDatos() {
    var nombre = sessionStorage.getItem("nombre");
    var apellidos = sessionStorage.getItem("apellidos");

    document.getElementById('nomHuespedF').innerText = (nombre + " " + apellidos);
    
}