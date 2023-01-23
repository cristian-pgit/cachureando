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
      swal("Team Cachureando", ";) Mensaje Enviado Enviado!", "success", {button: "Vale!"});
    } else {
      swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
    }
}

//Modifica alerta al enviar mensaje en Productos usando Sweetalert
function compraZa() {
      swal("Team Cachureando", "Compra ingresada en el carrito", "success", {button: "Gracias!"});
   
}

//Modifica alerta al enviar mensaje en Encuesta usando Sweetalert
function envioEncuesta() {
  var text = document.getElementById("exampleFormControlInput1").value;
  if (text != "") {
    swal("Team Cachureando", ";) Enviada!", "success", {button: "Vale!"});
  } else {
    swal("Team Cachureando", "Soci@! le falta ingresar el email", "error");
  }
}

//Modifica alerta al enviar mensaje en equipo usando Sweetalert
function contactame() {
  swal("Team Cachureando", "Soci@! le falta ingresar el mensaje", "error");
}
//muestra un reloj en la barra de navegacion
function startTime(){
  today=new Date();
  h=today.getHours();
  m=today.getMinutes();
  s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('reloj1').innerHTML=h+":"+m+":"+s;
  document.getElementById('reloj2').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);}
  function checkTime(i)
  {if (i<10) {i="0" + i;}return i;}
  window.onload=function(){startTime();}

  //