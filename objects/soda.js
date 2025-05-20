class Soda{
	serveSoda(event){
		console.log(event.target.id)
		let orders=getElement('clientes').getElementsByTagName('img');
		orders=Array.from(orders)
		if(orders.find(item=>item.id==event.target.id)){
			orders.find(item=>item.id==event.target.id).remove();
		}
	}
}