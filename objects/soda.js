class Soda {
	constructor(customers) {
		this.customers = customers
	}
	serveSoda(event) {
		let orders = getElement('clientes').getElementsByTagName('img');
		orders = Array.from(orders)
		if (orders.find(item => item.id == event.target.id)) {
			let order = orders.find(item => item.id == event.target.id)
			let customer = order.parentNode.parentNode;
			order.remove();
			this.customers.verifyOrders(customer)
		}
	}
}