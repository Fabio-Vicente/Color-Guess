const tries = document.getElementById('tries');
const rightColor = document.getElementById('rgb-color');

function generateColors() {
  const colors = tries.children;
  const rightAnswer = parseInt(Math.random() * 6, 10);
  for (let i = 0; i < colors.length; i += 1) {
    const R = parseInt(Math.random() * 256, 10);
    const G = parseInt(Math.random() * 256, 10);
    const B = parseInt(Math.random() * 256, 10);
    colors[i].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  colors[rightAnswer].style.backgroundColor = `rgb(${rightColor.innerText})`;
}

window.onload = generateColors;
