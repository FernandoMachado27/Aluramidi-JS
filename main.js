function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // esta pegando a segunda class dessa lista ex: tecla_pom
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}
