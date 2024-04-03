const mario = document.querySelector('.mario'); /* importação da imagem do mario para o java. */
const pipe = document.querySelector('.pipe'); /* importação da imagem do cano para o java. */

/* acionara a função jump. segundo comando */
const jump = () => {

    /* apos o fim da animação jump. terceiro comando */
    mario.classList.add('jump'); 

    /* função responsavel por remover a animação jump. quarto comando */
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

/* função responsavel por exercer um loop na animação do mario com a colição do cano. */ 
const loop = setInterval(() => {

    console.log('loop') /* apos todas as linhas da contante loop serem ativadas, o loop ira encerrar. */

    const pipePosition = pipe.offsetLeft; /* deslocamento esquerdo do cano. */
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* pegando o estilo que foi computado na propriedade mario, assim possibilitando pegar qualque elemento da propriedade. */
 
    console.log(marioPosition); 

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ /* apos o cano chegar no ponto 120, a animação sera encerrada. */

        pipe.style.animation = 'none'; /* comando para parar a animação do cano. */
        pipe.style.left = `${pipePosition}px`; /* comando responsavel por parar o cano na possição 120px, assim parando na frento da imagem do mario. */

        mario.style.animation = 'none'; /* comando para parar a animação do mario. */
        mario.style.bottom = `${marioPosition}px`;

        /* comando resposanvel por trocar a imagem game over apos a colisão com o obejto, importanto a imgem, e estilizando seu tamnho e largura. */
        mario.src ='./imagens/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); /* fim do comando loop. */

    }

}, 10);


/* apos precionar a tecla espaço. primeiro comando*/
document.addEventListener('keydown', jump); /* comando responsavel por, apois precionar a tecla desejada, o mario ira pular, asim chmando a classe jump.*/