class Jogo {
    constructor() {
        this.indiceAtual = 0;
        this.mapa = cartucho.mapa;
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 5);
        vida = new Vida(cartucho.configuracoes.vidaMaxima, cartucho.configuracoes.vidaInicial);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10 /*, 100*/ );
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10 /*, 100*/);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width * 2, 0, 200, 200, 400, 400, 10 /*, 100*/);
        inimigos.push(inimigo);
        inimigos.push(inimigoTroll);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            personagem.pular();
            somDoPulo.play()
        }
    }

    draw() {
        cenario.exibir();
        cenario.mover();
        vida.draw()
        personagem.exibir();
        personagem.aplicarGravidade();
        pontuacao.exibir();
        pontuacao.adicionarPonto();

        const linhaAtual = this.mapa[this.indiceAtual]
        
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;

        if (inimigoVisivel) {
            this.indiceAtual += 1;
            inimigo.aparecer();
            if (this.indiceAtual > this.mapa.length - 1) {
                this.indiceAtual = 0;
            }
        }

        inimigo.exibir();
        inimigo.mover();

        if (personagem.estaColidindo(inimigo)) {
            console.log('Colidiu');
            vida.perderVida();
            personagem.ficarInvencivel();
            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 200, height / 2 - 200);
                noLoop();
            }
        }
    }
}