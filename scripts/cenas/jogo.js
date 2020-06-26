class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        pontuacao = new Pontuacao();
        cenario = new Cenario(imagemCenario, 5);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width * 2, 0, 200, 200, 400, 400, 10, 100);

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
        personagem.exibir();
        personagem.aplicarGravidade();
        pontuacao.exibir();
        pontuacao.adicionarPonto();

        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        if (inimigoVisivel) {
            this.inimigoAtual += 1;
            if (this.inimigoAtual > 2) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = random(5, 30);
        }

        inimigo.exibir();
        inimigo.mover();

        if (personagem.estaColidindo(inimigo)) {
            console.log('Colidiu');
            image(imagemGameOver, width / 2 - 200, height / 2 - 200);
            // noLoop();
        }
    }
}