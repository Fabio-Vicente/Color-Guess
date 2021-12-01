const tries = document.getElementById('tries');
const colors = tries.children;
const rightColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
function initAnswer() {
  return parseInt(Math.random() * 6, 10);
}
let rightAnswer = initAnswer();

/* if (sessionStorage.getItem('score') !== null) {
  score.innerText = sessionStorage.getItem('score');
} */

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

function verifyColor(click) {
  const color = click.target;
  if (color !== tries) {
    if (color === colors[rightAnswer]) {
      answer.innerText = 'Acertou!';
      const numericScore = parseInt(score.innerText, 10) + 3;
      score.innerText = numericScore;
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
  sessionStorage.setItem('score', score.innerText);
}

window.onload = generateColors;
tries.onclick = verifyColor;
reset.onclick = resetGame;
