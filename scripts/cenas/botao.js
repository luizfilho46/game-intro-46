class Botao {
    constructor(texto, x, y) {
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(this._alterarCena.bind(this))
        this.botao.addClass('botao');
    }

    draw() {
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');
    }

    _alterarCena() {
        this.botao.remove();
        cenaAtual = 'jogo';
    }
}