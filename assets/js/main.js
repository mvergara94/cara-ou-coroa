const sectionBoardGame = document.getElementById('boardGame');
const botao = document.getElementById('jogar');

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
}

botao.onclick = giraMoeda;
