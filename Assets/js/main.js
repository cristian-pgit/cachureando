// Modifica alerta al enviar mensaje en index usando Sweetalert
function envioMsj() {
  var text = document.getElementById("exampleFormControlTextarea1").value;
  if (text != "") {
    swal("Team Cachureando", ";) Anotado!", "success", {button: "Vale!"});
  } else {
    swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
  }
}

//Modifica alerta al enviar mensaje en contacto usando Sweetalert
function enviCont() {
    var text = document.getElementById("mensaje").value;
    if (text != "") {
      swal("Team Cachureando", ";) Formulario Enviado!", "success", {button: "Vale!"});
    } else {
      swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
    }
}

//Modifica alerta al enviar mensaje en Productos usando Sweetalert
function compraZa() {
    var text = document.getElementById("mensaje").value;
    if (text != "") {
      swal("Team Cachureando", ";) Formulario Enviado!", "success", {button: "Vale!"});
    } else {
      swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
    }
}

//Modifica alerta al enviar mensaje en Encuesta usando Sweetalert
function envioEncuesta() {
   swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
}