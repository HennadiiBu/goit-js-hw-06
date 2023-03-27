function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fatherDiv = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const inputValue = document.querySelector('input');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
amount = Number(inputValue.value)
  const mass = Array(amount);
    let w = 30;
    let h = 30;
  for (let i = 0; i < mass.length; i++){

    mass[i] = `<div class="childDiv" style="width:${w}px; height:${h}px; background-color: ${getRandomHexColor()};">1</div>`;
    w += 10;
    h += 10;
  }

  fatherDiv.insertAdjacentHTML("beforeend", mass.join(''))
}

function destroyBoxes() {
  const childDiv = document.querySelectorAll('div#boxes > div')
  childDiv.forEach(elem=>elem.remove())
}

