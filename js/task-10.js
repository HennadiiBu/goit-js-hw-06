function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fatherDiv = document.querySelector('.boxes');
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const inputValue = document.querySelector('input');


createBtn.addEventListener('click', createBoxes)
  let amount=Number(inputValue.value)
function createBoxes(amount) {

  const mass = [];
mass.length=amount
  console.log(mass)
  // fatherDiv.append(...mass)
}