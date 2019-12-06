

const loginInput = document.getElementById('login')
const passwordInput = document.getElementById('password')
const passwordConfirmInput = document.getElementById('password-confirm')

const errorsElement = document.getElementById('errors')

loginInput.addEventListener('input', validate)// обработчик событий
passwordInput.addEventListener('input', validate)
passwordConfirmInput.addEventListener('input', validate)

loginInput.onchange = validate//событие обработки ошибки при изменении содержимого
passwordInput.onchange = validate
passwordConfirmInput.onchange = validate

function getErrors() {
	if (loginInput.value.length === 0) {
		loginInput.style.borderColor = 'red'
		return 'Не заполнено поле login'
	}
	if (loginInput.value.length > 50) {
		loginInput.style.borderColor = 'red'
		return 'Логин не должен превышать 50 символов'
	}
	if (passwordInput.value.length < 5) {
		passwordInput.style.borderColor = 'red'
		return 'Пароль не может быть меньше 5 символов'
	}
	if (passwordInput.valuelength > 50) {
		passwordInput.style.borderColor = 'red'
		return 'Пароль не должен превышать 50 символов'
	}
	if(passwordInput.value !== passwordConfirmInput.value) {
		passwordInput.style.borderColor = 'red'
		passwordConfirmInput.style.borderColor = 'red'
		return 'Поля "пароль" и "подтверждение пароля" не совпадают'
	}
	
	loginInput.style.borderColor = ''
	passwordInput.style.borderColor = ''
		passwordConfirmInput.style.borderColor = ''
	return false
}

function validate() {

	const errors = getErrors()
	if (errors) {
		errorsElement.innerText = errors
		return
	}
	errorsElement.innerText = ''//обнуляем для след запроса
}