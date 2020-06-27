class Vida {
    constructor (total, inicial) {
        this.total = total;
        this.inicial = inicial;
        this.largura = 25;
        this.altura = 25;
        this.vidas = this.inicial;
        this.xInicial = 20;
        this.y = 20;
    }

    draw () {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);
            image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
        } 
    }

    ganharVida () {
        if (this.vidas < this.total) {
            this.vidas += 1;
        }
    }

    perderVida () {
        this.vidas -= 1;
        console.log(this.vidas)
    }
}