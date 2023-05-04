const sectionBoardGame = document.getElementById('boardGame');
const botao = document.getElementById('jogar');
const resultado = document.getElementById('resultado');

function obtemLadoMoeda() {
  const numeroRandom = Math.random();
  if (numeroRandom > 0.5) return 'cara';
  else return 'coroa';
}

function giraMoeda() {
  sectionBoardGame.classList.remove('animate-cara', 'animate-coroa');
  const ladoMoeda = obtemLadoMoeda();
  requestAnimationFrame(() =>
    sectionBoardGame.classList.add(`animate-${ladoMoeda}`)
  );

  zeraResultado();
  setTimeout(() => {
    geraResultado(ladoMoeda);
  }, 3000);
}

function geraResultado(lado) {
  resultado.innerHTML = `Deu ${lado}!`;
}

function zeraResultado() {
  resultado.innerHTML = '';
}

botao.onclick = giraMoeda;
