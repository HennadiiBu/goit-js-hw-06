function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBkg = document.querySelector('body');
const colorValue = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', onClick);

function onClick() {
  colorBkg.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}


