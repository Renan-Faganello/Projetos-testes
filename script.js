const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo')
const botaoVoltar = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-file-play');
    botaoPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-file-play');
    botaoPlayPause.classList.remove('bi-pause-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capítulo' + capituloAtual;
}

function proximaFaixa() {
    if(capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
        trocarNomeFaixa();
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
}

function voltarFaixa() {
    if(capituloAtual === 1) {
        capituloAtual = numeroCapitulos - 1;
    } else {
        capituloAtual = capituloAtual - 1
        trocarNomeFaixa();
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);