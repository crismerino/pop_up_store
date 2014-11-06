var campos = document.getElementsByClassName('formulario');
var mensajes = document.getElementsByClassName('alerta');
var alertNombre = document.getElementById('errNombre');
var alertEmail = document.getElementById('errEmail');
var alertAsunto = document.getElementById('errAsunto');
var alertMensaje = document.getElementById('errMensaje');

function validar(){
	 for(var i = 1; i<=campos.length+1;i++)
	 {
	 	if(document.getElementById('txt'+i).value === "" )
	 	{
	 		errorVacio(document.getElementById('txt'+i));
		}
		else
		{
			mensajes[i].style.display = "none";
		}
	 }
}

function errorVacio(campo){

	if(campo == document.form1.nombre)
 		{
 			alertNombre.style.display = "inline";
 		}
 		else if(campo == document.form1.asunto)
 		{
 			alertAsunto.style.display = "inline";
 		}
 		else if(campo == document.form1.mensaje)
 		{
 			alertMensaje.style.display = "inline";
 		}
 		else if(campo == document.form1.email)
 		{
 			alertEmail.style.display = "inline";
 		}
}

//crear div para que te avise que debes introducir mail en vez de alert
//lo mismo con el nombre
//

//var email = document.getElementById('txt2').value;
//var necesario = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//var asunto = document.getElementById('txt3').value;
//var mensaje = document.getElementById('txt4').value;