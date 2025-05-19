class Grill{
	constructor(grillElement,grillSlots){
		this.grillElement=grillElement;
		this.grillSlots=grillSlots;
	}
}

Grill.prototype.cookMeat=function(meatItem){
	//# Liga a Grelha
	if(document.getElementById('grelha').children.length!=0){
		document.getElementById('topo__grelha').style='background-image:url("assets/img/grelha_on.png")';
	}else{
		document.getElementById('topo__grelha').style='background-image:url("assets/img/grelha_off.png")';
	}

	// Cozinha a carne
	let cook_timer=setTimeout(function(){
			meatItem.id='cooked_meat';
			meatItem.src='assets/img/carne_assada.png';
			clearTimeout(cook_timer);
	},5000);
}

Grill.prototype.serveMeat = function(getPlate){
	this.grillElement.addEventListener('click', () => {
		try {
			let grillItems = Array.from(this.grillElement.children);
			grillItems.forEach((item) => {
				item.onmouseup=() => {
					if (item.id === 'cooked_meat') {
						// Busca um prato com base_pao
						let breadPlate = getPlate('pao_base');
							
						// Se ainda tem filhos, não há pratos disponíveis
						if (breadPlate && breadPlate.id == 'bread_base') {
							item.remove();
							item=null;
							breadPlate.id='burguer_step1';
							breadPlate.src='assets/img/burguer_step1.png';
	
							if(document.getElementById('grelha').children.length==0){
								document.getElementById('topo__grelha').style='background-image:url("assets/img/grelha_off.png")';
							}else{
								document.getElementById('topo__grelha').style='background-image:url("assets/img/grelha_on.png")';
							}
						} 
					}
				};
			});
		} catch (erro) {
			alert(erro);
		}
	});
};
