const form = document.querySelector('.login-form');

form.addEventListener('submit', onSub);

function onSub(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if ((email.value  || password.value) === '') {
        alert(`Заполните все поля`);
    }

    const result = {
        email: email.value,
        password: password.value,
    };

    console.log(result)
    form.reset()
}
