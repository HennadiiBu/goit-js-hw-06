const inputKey = document.querySelector('#validation-input');
const lengthValue = inputKey.dataset.length;

inputKey.addEventListener('change', onChange);

function onChange() {
    if (inputKey.value.length !== Number(lengthValue)) {
               inputKey.classList.remove('valid');
        inputKey.classList.add('invalid');
    } else {
          inputKey.classList.remove('invalid');
               inputKey.classList.add ('valid'); 
    }
}