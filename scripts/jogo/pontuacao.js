class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibir() {
        textAlign(RIGHT);
        textSize(50);
        fill('#fff555');
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos += 0.2;
    }
}