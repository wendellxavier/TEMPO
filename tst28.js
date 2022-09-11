function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'

    });
}

console.log(criaHoraDosSegundos());

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(evento){
    const elemento = evento.target;

    if(elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if(elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});
