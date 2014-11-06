window.onload= function(){
    var contador=1;

    document.getElementById("img1").style.display="inline";

    function pasarImagen(){
        var img=document.getElementById("img"+contador);
        img.style.zIndex= "2"
        img.style.animation= "slide 1s ease infinite normal";
        
        if(contador<6){
            contador++;
        }
        else{
            contador=1;
        }
        
        var imgNext=document.getElementById("img"+contador)
        imgNext.style.zIndex= "1"
        imgNext.style.display= "inline";
        setTimeout(function(){img.style.display= "none";
        img.style.animation= "";},1000);
    }

    window.setInterval(pasarImagen, 5000);
}