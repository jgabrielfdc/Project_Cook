class Grill{
	constructor(grillElement,grillSlots){
		this.grillElement=grillElement;
		this.grillSlots=grillSlots;
	}
}

Grill.prototype.cookMeat=function(meat){
	
	//# Recebe a Carne
	let meatItem=meat;
	//# Liga a Grelha
	document.getElementById('topo__grelha').style='background-image:url("assets/img/grelha_on.png")';

	// Cozinha a carne
	let cook_timer=setTimeout(function(){
			console.log('Assando');
			meatItem.id='cooked_meat';
			meatItem.src='assets/img/carne_assada.png';
			clearTimeout(cook_timer);
	},5000);
}

Grill.prototype.serveMeat = function(getFreePlate){
	this.grillElement.addEventListener('click', () => {
		try {
			let grillItems = Array.from(this.grillElement.children);
			grillItems.forEach((item) => {
				item.addEventListener('mouseup', () => {
					console.log(item);
					if (item.id === 'cooked_meat') {
						// Buscar um prato livre no momento do clique
						let freePlate = getFreePlate();

						if (!freePlate) {
							// Nenhum prato disponível
							throw new Error('Sem pratos livres');
						}

						// Se já tem algo no prato, tentar outro
						if (freePlate.children.length > 0) {
							freePlate = getFreePlate();
						}

						// Se ainda tem filhos, não há pratos disponíveis
						if (freePlate && freePlate.children.length === 0) {
							freePlate.appendChild(item);
						} else {
							throw new Error('Todos os pratos estão ocupados');
						}
					}
				});
			});
		} catch (erro) {
			alert(erro);
		}
	});
};
