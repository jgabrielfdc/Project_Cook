import customer from "./Customers.js";
import coins from "../UI/Coins.js"
class Soda {
	constructor() {
		this.serveSoda(coins)
	}

	serveSoda(coins) {

		document.querySelectorAll('#refrigerante').forEach(function(item){
			item.onclick=function(event){
				let sabor=$(event.target).attr('name');
				let refrigerante=`refrigerante_${sabor}`;
				const orders = Array.from(getElement('clientes').getElementsByTagName('img'));
				const order = orders.find(img => img.id === refrigerante);

				if (order) {
					const customerObject = order.closest('.cliente'); // Usa o método mais semântico e seguro
					order.remove();
					coins.updateCoins(order.id);
					customer.verifyOrders(customerObject);
				}
			}   
		});
		
	}
}
let soda=new Soda();

export default soda;