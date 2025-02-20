
function iniciarFormulario(){
    
    document.getElementById("divUltimosJuegosJugados").style.display="none"
    document.getElementById("divJuegosQuePlaneesJugar").style.display="none"
    document.getElementById("divJuegoFavorito").style.display="none"
    document.getElementById("divJuegosAnime").style.display="none"
    document.getElementById("divListaJuegosAnime").style.display="none"
    document.getElementById("textarea").style.display="none"
    
    document.getElementById("Formulario").addEventListener("click", siguiente)
}   

function siguiente(evento){
    if (evento.target.matches("#botonSiguiente1")){
        document.getElementById("divDatosPersonales").style.display= "none"
        document.getElementById("divUltimosJuegosJugados").style.display = ""
    }
    else if(evento.target.matches("#botonSiguiente2")){
        document.getElementById("divUltimosJuegosJugados").style.display = "none"
        document.getElementById("divJuegosQuePlaneesJugar").style.display = ""
    }
    else if(evento.target.matches("#botonSiguiente3")){
        document.getElementById("divJuegosQuePlaneesJugar").style.display = "none"
        document.getElementById("divJuegoFavorito").style.display = ""
    }
    else if(evento.target.matches("#botonSiguiente4")){
        document.getElementById("divJuegoFavorito").style.display = "none"
        document.getElementById("divJuegosAnime").style.display = ""
    }
    else if(evento.target.matches("#siAnime")){
         divListaJuegosAnime.style.display=""
    }
    else if(evento.target.matches("#noAnime")){
        divListaJuegosAnime.style.display="none"
   }
    else if(evento.target.matches("#selectListaDeJuegosAnime")){
        if (selectListaDeJuegosAnime.value == "otro"){
            textarea.style.display=""
        }
        else{
            textarea.style.display="none"
        }
   }
}
window.addEventListener("load", iniciarFormulario)