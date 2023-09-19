function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado')
    } else {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // esta pegando a segunda class dessa lista ex: tecla_pom
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) { // se tecla for pressionada

        if (evento.code === 'Space' || evento.code === 'Enter') {  // === -> compara não só o valor, mas também o tipo do dado
            tecla.classList.add('ativa');
        } 
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
