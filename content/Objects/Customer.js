let randomSkin;
let randomFace;
let randomTimer;
let customerGenerator = undefined;
let deskSize = 0;

class Customer {
	constructor() {
		this.products = [
			'burguer',
			'hamburguer',
			'cheeseburguer',
			'refrigerante_cola',
			'refrigerante_lima',
			'refrigerante_uva'
		];
		this.faces = [
			'O_O', 
			'0_0', 
			'-_-', 
			'=_=', 
			'O-O', 
			'*-*', 
			'*_*', 
			'1_1'
		];
		this.skins = [
			'#F7F342', 
			'#568923', 
			'#F93A52', 
			'#68D930', 
			'#43EC22'
		];
		this.orders = [];
		this.finished=0;
	
		//! Cria Clientes Aleatórios
		this.createCustomer()
	}

}

Customer.prototype.generateOrder = function () {
	this.orders = [];
	let orderAmount = randomNumber(2);

	for (let i = 0; i < orderAmount; i++) {
		let randomProduct = Math.floor(Math.random() * this.products.length);
		let order = this.products[randomProduct];
		this.orders.push(order);
	}

	return this.orders;

}

Customer.prototype.generateCustomerAttributes = function () {
	randomSkin = Math.floor((Math.random() * this.skins.length));
	randomFace = Math.floor((Math.random() * this.faces.length));

	return {
		'skin': this.skins[randomSkin],
		'face': this.faces[randomFace]
	};
}

Customer.prototype.createOrderList = function () {

	let orderList = this.generateOrder();

	let customerOrderList = document.createElement('div');
	customerOrderList.className = 'orders';
	let self = this;

	for (let item of orderList) {
		customerOrderList.appendChild(self.createOrderItem(item))
	}

	return customerOrderList;
}

Customer.prototype.createOrderItem = function (order) {
	let item = document.createElement('img');
	item.className = 'order';
	item.src = 'public/assets/img/' + order + '.png';
	item.style.height = '40px';
	item.style.width = '40px';
	item.innerText = order;
	item.id = order;
	item.style.border = '3px dotted #F00'
	return item;
}

Customer.prototype.createFace = function () {
	let customerFace = document.createElement('div')
	customerFace.className = 'face';
	customerFace.innerText = this.generateCustomerAttributes().face;
	customerFace.style.backgroundColor = this.generateCustomerAttributes().skin;
	customerFace.style.border = '3px solid #000'

	return customerFace
}

Customer.prototype.createCustomer = function () {
	if (deskSize <= 4) {
		// Gera um intervalo aleatorio
		randomTimer = Math.round(Math.random() * 15) * 1000;

		//Criando o elemento do cliente e recuperando suas caracteristicas e pedidos
		let customer = document.createElement('div');

		customer.className = 'cliente';
		customer.appendChild(this.createOrderList());
		customer.appendChild(this.createFace());

		let clientList = getElement('clientes');
		clientList.appendChild(customer);

		// Limpa o intervalo anterior (se existir)
		clearInterval(customerGenerator);

		// Define um novo intervalo com o novo tempo aleatório
		customerGenerator = setInterval(this.createCustomer.bind(this), randomTimer);
	}

	// Atualiza a quantidade de pessoas no balcão
	deskSize = getElement('clientes').children.length;
}

Customer.prototype.verifyOrders = function (customerObject) {
	let orderAmount = customerObject.children[0].children.length;
	if (orderAmount < 1) {
		this.finished+=1;
		getElement('atendido').innerText=this.finished;
		customerObject.remove();
	}
}

let customer=new Customer();

export default customer;