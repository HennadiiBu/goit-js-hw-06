let counterValue=0;

let btnDecrement = document.querySelector(`button[data-action='decrement']`);
let btnIncrement = document.querySelector(`button[data-action='increment']`);
const result = document.querySelector(`#value`);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    result.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    result.textContent = counterValue;
}
