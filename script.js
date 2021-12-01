const tries = document.getElementById('tries');
const colors = tries.children;
const rightColor = document.getElementById('rgb-color');
const rightAnswer = parseInt(Math.random() * 6, 10);
const answer = document.getElementById('answer');

function generateColors() {
  for (let i = 0; i < colors.length; i += 1) {
    const R = parseInt(Math.random() * 256, 10);
    const G = parseInt(Math.random() * 256, 10);
    const B = parseInt(Math.random() * 256, 10);
    colors[i].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  colors[rightAnswer].style.backgroundColor = `rgb${rightColor.innerText}`;
}
function verifyColor(click) {
  const color = click.target;
  if (color !== tries) {
    if (color === colors[rightAnswer]) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

window.onload = generateColors;
tries.onclick = verifyColor;
