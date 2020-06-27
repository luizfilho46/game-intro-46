class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade /*, delay*/ ) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
        this.velocidade = velocidade;
        // this.delay = delay;
        this.x = width; // + this.delay;
    }

    mover() {
        this.x = this.x - this.velocidade;
    }

    aparecer () {
        this.x = width;
    }
}