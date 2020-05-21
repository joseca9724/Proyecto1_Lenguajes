if (!localStorage.getItem("huespedL")) {
    populateStorage();
} else {
    getLocalStorage();
    localStorage.clear();
}

function btnReservaClick() {
    
    var huesped = parseInt(document.getElementById('huesped').value, 10);
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

}

function getLocalStorage() {
    var hh = localStorage.getItem("huespedL");
    //document.getElementById('huesped').setAttribute();// = hh;
    alert(document.namespaceURI);
}