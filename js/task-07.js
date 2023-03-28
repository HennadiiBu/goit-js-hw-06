const inputKey = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize=Number(inputKey.value)+`px`
inputKey.addEventListener('input', onInput);

function onInput() {
    text.style.fontSize=Number(inputKey.value)+'px'
}