function validarNro(e) {
    var key;
    if (window.event) // IE
    {
        key = e.keyCode;
    }
    else if (e.which) // Netscape/Firefox/Opera
    {
        key = e.which;
    }

    if (key < 48 || key > 57) {
        if (key == 46 || key == 8) // Detectar . (punto) y backspace (retroceso)
        { return true; }

        else
        { return false; }
    }

    return true;
}

