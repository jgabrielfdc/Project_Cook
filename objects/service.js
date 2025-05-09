//# Inicia o Placar
let pontos=0;
document.getElementById('pontuacao').innerText='Pontos: '+pontos;

//# Recupera os objetos;
const grill = new Grill(document.getElementById('grelha'),3);
const meatSource = document.getElementById('meat');
const plates = document.getElementById('plates');

//# Cozinhar carne;
meatSource.addEventListener('click',function(){
	let meat=new Meat('meat','green',5);
	grill.cookMeat(meat);
})














/*
//# Recupera os pratos e cria o evento 

plates.addEventListener('click',function(event){
			
		//# Recuperas os clientes
		let findOrder=false;
		let element=event.target;
		let allCustomers=document.getElementById('clientes').children;

		if(element.matches('#cooked_meat')){
			for(let i=0;i<allCustomers.length;i++){
			
			//# Recupera o cliente
			let customer=allCustomers[i];

			//# Recupera os pedidos
			let customerOrder=customer.children[0].children;
			for(let i=0;i<customerOrder.length;i++){
					console.log(customerOrder[i].innerText);
				//# Verifica cada pedido e finaliza caso encontre
				if(customerOrder[i].innerText=="- meat"){
						
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
				console.log(customerOrder)
				if(customerOrder.length==0){
					console.log('Vazia')
					pontos+=30;
					customer.remove()
					document.getElementById('pontuacao').innerHTML='Pontos: '+pontos;
				}
				break;
			
			}
	}
		}
})*/
