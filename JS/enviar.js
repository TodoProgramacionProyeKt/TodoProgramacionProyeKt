function enviar() {
    var formulario = document.getElementById("formulario");
    var dato = formulariio[0];

    if (dato.value=="enviar") {
        alert("enviando el formulario");
        formulario.submit();
        return true;
    } else {
        alert("no se envia el formulario");
        return false;
    }
}