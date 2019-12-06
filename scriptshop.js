const basketElement = document.getElementById('basket')

function renderBasket(basek) {

	const totalPrice = basket.countTotalPrice()
	const totalCount = basket.countTotalCount()

	return `
		<h1>Ваша корзина</h1>
		<p>Кол-во товаров: ${totalCount}</p>
		<p>Общая цена: ${totalPrice}</p>
		
		<h2>Товары:</h2>
		${basket.products.map(product => {
			return `<p>Товар: ${product.name}, кол-во: ${product.count}, цена: ${product.price * product.count}</p>`
		}).join('<br>')}
	`
}

class Basket {
	constructor(){
		this.products = []
	}
	addToBasket(productToAdd) {
		if (this.products.find(product => product.name === productToAdd.name)) {
			this.products.find(product => product.name === productToAdd.name).count += productToAdd.count
		} else {
			this.products.push(productToAdd)
		}
		this.renderToElem()
	}
	countTotalPrice() {
		let totalPrice = 0
		for(let i = 0; i < this.products.length; i++) {
			let product = this.products[i]
			totalPrice += product.price * product.count
		}
		return totalPrice
	}
	countTotalCount() {
		let totalCount = 0
		for(let i = 0; i < this.products.length; i++) {
			let product = this.products[i]
			totalCount += product.count
		}
		return totalCount
	}
	renderToElem() {
		basketElement.innerHTML = renderBasket(this)
	}
}

const basket = new Basket()
basket.renderToElem()


Array.from(document.querySelectorAll('.add-to-basket-button')).forEach(button => {
	button.onclick = () => {
		const product = button.parentElement.parentElement
		const price = +product.querySelector("p").getAttribute("data-price")
		const name = product.querySelector("h3").innerText
		basket.addToBasket({
			price,
			count: 1,
			name,
		})
	}
})