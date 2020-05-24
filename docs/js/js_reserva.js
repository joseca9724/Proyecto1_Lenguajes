var obj = JSON.parse(localStorage.getItem('obj'));
console.log(obj);

var x = parseInt(obj.codigo);
switch(x) {
    case 1:
document.getElementById('lugar').setAttribute('value',"hola");
break;
case 2:
    document.getElementById('lugar').setAttribute('value',"pura vida");
break;
}