import './app.js'

const nav = document.getElementsByTagName('nav')[0]
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
	nav.classList.toggle('hidden')
})
