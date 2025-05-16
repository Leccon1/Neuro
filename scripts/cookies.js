// Проверяем, было ли уже согласие
if (localStorage.getItem('cookiesAccepted') === 'true') {
	document.getElementById('cookie-banner').style.display = 'none'
} else {
	document.getElementById('cookie-banner').style.display = 'flex'

	// Обработчик нажатия на кнопку
	document
		.getElementById('accept-cookies')
		.addEventListener('click', function () {
			localStorage.setItem('cookiesAccepted', 'true')
			document.getElementById('cookie-banner').style.display = 'none'
		})
}
