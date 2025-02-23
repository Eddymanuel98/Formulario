
function iniciarFormulario(){
    document.getElementById("sectionDatosPersonales").style.display=""
    document.getElementById("sectionUltimosJuegosJugados").style.display="none"
    document.getElementById("sectionJuegosQuePlaneesJugar").style.display="none"
    document.getElementById("sectionJuegoFavorito").style.display="none"
    document.getElementById("sectionJuegosAnime").style.display="none"
    document.getElementById("divListaJuegosAnime").style.display="none"
    document.getElementById("textarea").style.display="none"
    
    document.getElementById("Formulario").addEventListener("click", siguiente)
}   

function cambiarSeccion(seccionActual, seccionSiguiente){
    document.getElementById(seccionActual).style.display = "none"
    document.getElementById(seccionSiguiente).style.display = ""
}

function siguiente(evento){
    let secciones = ["sectionDatosPersonales", "sectionUltimosJuegosJugados", "sectionJuegosQuePlaneesJugar", "sectionJuegoFavorito", "sectionJuegosAnime", "divListaJuegosAnime"]
    let seccionVisible = secciones.find(id => document.getElementById(id).style.display !=="none")
    let inputsVisibles = document.querySelectorAll(`#${seccionVisible} input, #${seccionVisible} select, #${seccionVisible} textarea`)
 
    if(evento.target.matches("#botonSiguiente1")){ 
        for (let input of inputsVisibles){
            if(!input.checkValidity()){
                alert("Please fill out all the fields");
                return;
            }
        }
        cambiarSeccion("sectionDatosPersonales", "sectionUltimosJuegosJugados")
    } 
    else if(evento.target.matches("#botonSiguiente2")){
        let juegosJugados = document.querySelectorAll("#sectionUltimosJuegosJugados input[type='checkbox']:checked")
        if (juegosJugados.length < 2){
            alert("Please select at least 2 games")
            return;
        }
        else{
            cambiarSeccion("sectionUltimosJuegosJugados", "sectionJuegosQuePlaneesJugar")
        }
    }
    else if(evento.target.matches("#botonSiguiente3")){
        let juegosPorJugar = document.querySelectorAll("#sectionJuegosQuePlaneesJugar input[type='checkbox']:checked")
        if (juegosPorJugar.length < 2){
            alert("Please select at least 2 games")
            return;
        }
        else{
            cambiarSeccion("sectionJuegosQuePlaneesJugar", "sectionJuegoFavorito")
        }
    }
    else if(evento.target.matches("#botonSiguiente4")){
        cambiarSeccion("sectionJuegoFavorito", "sectionJuegosAnime")
    }
    else if(evento.target.matches("#siAnime")){
        document.getElementById("divListaJuegosAnime").style.display=""
    }
    else if(evento.target.matches("#noAnime")){
        document.getElementById("divListaJuegosAnime").style.display="none"
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