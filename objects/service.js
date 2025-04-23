let pontos=0;
document.getElementById('pontuacao').innerText='Pontos: '+pontos;
const plates=document.getElementById('plates');
plates.addEventListener('click',function(event){
  	let element=event.target;
	if(element.matches('#cooked_meat') && element.parentElement.className=='plate__item'){
		let findOrder=false;
		let allCustomers=document.getElementById('clientes').children;
		for(let i=0;i<allCustomers.length;i++){
			let customer=allCustomers[i];
			let customerOrder=customer.children[0].children;
			for(let i=0;i<customerOrder.length;i++){
				if(customerOrder[i].innerText=="meat"){
					
					findOrder=true;
					if(findOrder){
						
						break;
					}
				}
			}
			if(findOrder){
				element.remove()
				customerOrder[i].remove();
				if(customerOrder.length<1){
					customer.remove()
					pontos+=10;
					document.getElementById('pontuacao').innerHTML='Pontos: '+pontos;
				}
				break;
			
			}
		}
	}
})
