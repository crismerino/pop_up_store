var espacios = { 
  "sala_reuniones": "images/planta2.jpg", 
  "sala_trabajo": "images/planta3.jpg", 
  "sala_visionado": "images/planta4.jpg", 
  "sala_grupo": "images/planta5.jpg", 
  "sala_grande": "images/planta6.jpg"}

area = document.getElementsByClassName("area")

for(var i=0;i<area.length;i++){
  area[i].onclick = changeRoom;
  console.log(area[i])
}

function changeRoom(){
	console.log("hola")
  var sala = this.id;
  document.getElementById("mapa").src=espacios[sala];
}

