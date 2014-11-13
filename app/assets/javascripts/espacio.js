var espacios = { 
  "sala_reuniones": "/assets/planta2.jpg", 
  "sala_trabajo": "/assets/planta3.jpg", 
  "sala_visionado": "/assets/planta4.jpg", 
  "sala_grupo": "/assets/planta5.jpg", 
  "sala_grande": "/assets/planta6.jpg"}

area = document.getElementsByClassName("area")

for(var i=0;i<area.length;i++){
  area[i].onclick = changeRoom;
}

function changeData(data){
  console.log("It Works" + data.nombre)
}

function changeRoom(){
  var sala = this.id;
  document.getElementById("mapa").src=espacios[sala];
  sala = this.title;

  $.ajax({
    type: "POST",
    url: "/peticion",
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    data: sala,
    success: function (data){
      console.log("Hola")
      changeData(data);
    }
  })
}