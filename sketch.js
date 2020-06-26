function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  botao = new Botao('Iniciar', width / 2, height / 2);
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  jogo.setup();
  // somDoJogo.play();
  // somDoJogo.loop();
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
