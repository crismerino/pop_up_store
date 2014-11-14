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

  var cajaEventos = document.getElementsByClassName("cajaEventos")[0];

  var listaEvento = document.createElement('ul');

  if (cajaEventos.firstChild){
    cajaEventos.innerHTML = "";
  };
 
  var aforoSala = document.createElement('li');
  aforoSala.textContent = "Aforo: " + data.capacidad + " asistentes.";

  var descSala = document.createElement('li');                        
  descSala.textContent = "Descripción: " + data.descripcion + ".";

  var wifiSala = document.createElement('li');                        
  wifiSala.textContent = "Conexion Wifi disponible.";

  var climaSala = document.createElement('li');                        
  climaSala.textContent = "Sala climatizada.";

  if (data.equipo_informatico === true){
    var audioSala = document.createElement('li');
    audioSala.textContent = "Sala multimedia.";
  }else
  {
    var audioSala = document.createElement('li');
    audioSala.textContent = "Sala no multimedia.";
  };

  if (data.equipo_informatico === true){
    var pcSala = document.createElement('li');
    pcSala.textContent = "Sala Informatizada.";
  }else
  {
    var pcSala = document.createElement('li');
    pcSala.textContent = "Sala no informatizada.";
  };

  listaEvento.textContent = data.nombre;

  listaEvento.appendChild(aforoSala);
  listaEvento.appendChild(descSala);
  cajaEventos.appendChild(listaEvento);
  listaEvento.appendChild(climaSala);
  listaEvento.appendChild(wifiSala);
  listaEvento.appendChild(pcSala);
}

function changeRoom(evt){
  var sala = evt.target.id;
  document.getElementById("mapa").src=espacios[sala];
  sala = evt.target.title;

  $.ajax({
    type: "POST",
    url: "/peticion",
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    data: sala,
    success: function (data){
      changeData(data);
    }
  })
}