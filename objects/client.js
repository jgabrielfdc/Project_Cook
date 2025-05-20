class Customer{
	constructor(products,faces,skins){
		this.products=products;
		this.faces=faces;
		this.skins=skins;
		this.orders=[];
	}
}

// X
Customer.prototype.generateOrder=function(){
	this.orders=[];
	let orderAmount=Math.round(Math.random()*2)+1;

	for(let i=0; i<orderAmount;i++){
		let randomProduct=Math.floor(Math.random()*this.products.length);
		order=this.products[randomProduct];
		this.orders.push(order);
	}

	return this.orders;

}

// X
Customer.prototype.generateCustomerAttributes=function(){
	randomSkin=Math.floor((Math.random()*this.skins.length));
	randomFace=Math.floor((Math.random()*this.faces.length));
	
	return {
		'skin': skins[randomSkin],
		'face': faces[randomFace]
	};
}

Customer.prototype.createOrderList=function(){
	
	let orderList=this.generateOrder();

	let customerOrderList=document.createElement('div');
		customerOrderList.className='orders';
		let amountItems=orderList.length;

		for(let i=0;i<amountItems;i++){
			let item=this.createOrderItem(orderList[i]);
			customerOrderList.appendChild(item);	
		}
	
	return customerOrderList;
}

Customer.prototype.createOrderItem=function(order){
	let item=document.createElement('img');
			item.className='order';
			item.src='assets/img/'+order+'.png';
			item.style.height='40px';
			item.style.width='40px';
			item.innerText=order;
			item.id=order;
	return item;
}

Customer.prototype.createFace=function(){
	let customerFace=document.createElement('div')
		customerFace.className='face';
		customerFace.innerText=this.generateCustomerAttributes().face;
		customerFace.style.backgroundColor=this.generateCustomerAttributes().skin;
	
	return customerFace
}

Customer.prototype.createCustomer=function(){
	if(deskSize<=4){
		// Gera um intervalo aleatorio
		randomTimer = Math.round(Math.random() * 15) * 1000;
		
		//Criando o elemento do cliente e recuperando suas caracteristicas e pedidos
		let customer=document.createElement('div');
		
		customer.className='cliente';
		customer.appendChild(this.createOrderList());
		customer.appendChild(this.createFace());
	
		let clientList=document.getElementById('clientes');
		clientList.appendChild(customer);

		// Limpa o intervalo anterior (se existir)
 		clearInterval(customerGenerator);

		// Define um novo intervalo com o novo tempo aleatório
 		customerGenerator = setInterval(this.createCustomer.bind(this), randomTimer);
	}
		
	// Atualiza a quantidade de pessoas no balcão
	deskSize=document.getElementById('clientes').children.length;
}

Customer.prototype.verifyOrders=function(){
	
}