
class Soda {
	constructor(customers) {
		this.customers = customers;
	}

	serveSoda(sabor,coins) {
		let refrigerante=`refrigerante_${sabor}`;
		const orders = Array.from(getElement('clientes').getElementsByTagName('img'));
		const order = orders.find(img => img.id === refrigerante);

		if (order) {
			const customer = order.closest('.cliente'); // Usa o método mais semântico e seguro
			order.remove();
			coins.updateCoins(order.id);
			this.customers.verifyOrders(customer);
		}
	}
}

export default Soda