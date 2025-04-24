let pontos=0;
document.getElementById('pontuacao').innerText='Pontos: '+pontos;

function getCustomers(){
	let allCustomers=document.getElementById('clientes').children;
	return allCustomers;
}

//# Recupera os pratos e cria o evento 
const plates=document.getElementById('plates');
plates.addEventListener('click',function(event){		
		//# Recuperas os clientes
		let findOrder=false;
		let element=event.target;
		
		if(element.matches('#cooked_meat')){
			for(let i=0;i<getCustomers().length;i++){
			
			//# Recupera o cliente
			let customer=getCustomers()[i];

			//# Recupera os pedidos
			let customerOrder=customer.children[0].children;
			for(let i=0;i<customerOrder.length;i++){

				//# Verifica cada pedido e finaliza caso encontre
				if(customerOrder[i].innerText=="meat"){
						//# Remove o target e o pedido (Efeito de entrega)
						element.remove()
						customerOrder[i].remove();
						pontos+=10;
						findOrder=true;
					break;
				}
			}
			
			if(findOrder){
				document.getElementById('pontuacao').innerHTML='Pontos: '+pontos;
				if(customerOrder.length<1){
					customer.remove()
					pontos+=50;
					break;
				}
				break;
			
			}
	}
		}
})
