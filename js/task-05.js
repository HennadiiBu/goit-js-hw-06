const inputText = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

inputText.addEventListener('input', onInput);

function onInput(event) {
    if (event.currentTarget.value === "") {
        text.textContent = "Anonymous";

    } else {
        text.textContent = event.currentTarget.value;
    }
 }