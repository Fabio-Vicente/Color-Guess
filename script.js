const tries = document.getElementById('tries');
const colors = tries.children;
const rightColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
const highScore = document.getElementById('high-score');

let alreadyPlayed = false;

function initAnswer() {
  return parseInt(Math.random() * 6, 10);
}
let rightAnswer = initAnswer();

if (localStorage.getItem('score') !== null) {
  highScore.innerText = localStorage.getItem('score');
}

function ramdomColor() {
  const R = parseInt(Math.random() * 256, 10);
  const G = parseInt(Math.random() * 256, 10);
  const B = parseInt(Math.random() * 256, 10);
  return `(${R}, ${G}, ${B})`;
}
function generateColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = `rgb${ramdomColor()}`;
  }
  colors[rightAnswer].style.backgroundColor = `rgb${rightColor.innerText}`;
}
function beatHighScore() {
  const numericScore = parseInt(score.innerText, 10);
  const numericHighScore = parseInt(highScore.innerText, 10);
  if (numericScore > numericHighScore) {
    highScore.innerText = score.innerText;
    localStorage.setItem('score', highScore.innerText);
  }
}
function verifyColor(click) {
  if (alreadyPlayed) {
    return;
  }
  const color = click.target;
  if (color !== tries) {
    if (color === colors[rightAnswer]) {
      answer.innerText = 'Acertou!';
      const numericScore = parseInt(score.innerText, 10) + 3;
      score.innerText = numericScore;
      beatHighScore();
      alreadyPlayed = true;
    } else {
      answer.innerText = 'Errou! Tente novamente!';
      score.innerText = 0;
    }
  }
}
function resetGame() {
  rightAnswer = initAnswer();
  rightColor.innerText = ramdomColor();
  answer.innerText = 'Escolha uma cor';
  generateColors();
  alreadyPlayed = false;
}

window.onload = generateColors;
tries.onclick = verifyColor;
reset.onclick = resetGame;
