var espacios = { 
  "sala_reuniones": "/assets/planta2.jpg", 
  "sala_trabajo": "/assets/planta3.jpg", 
  "sala_visionado": "/assets/planta4.jpg", 
  "sala_grupo": "/assets/planta5.jpg", 
  "sala_grande": "/assets/planta6.jpg"}

area = document.getElementsByClassName("area")

for(var i=0;i<area.length;i++){
  area[i].addEventListener('click',changeRoom);
}

function changeData(data){
  cajaEventos = document.getElementsByClassName("cajaEventos")[0];
  cajaEventos.innerHTML = "<br>" + "<br>" + "<br>" + data.nombre + "<br>"+ "<br>" + "Aforo: " + data.capacidad + "<br>" + "Descripcion: " + data.descripcion;
}

function changeRoom(evt){
  console.log('evento:', evt);
  var sala = evt.target.id;
  document.getElementById("mapa").src=espacios[sala];
  sala = evt.target.title;

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