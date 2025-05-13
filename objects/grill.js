class Grill{
	constructor(grillElement,grillSlots){
		this.grillElement=grillElement;
		this.grillSlots=grillSlots;
	}
	
}

Grill.prototype.cookMeat=function(meatObject){
	
	//# Recebe a Carne
	let meatItem=meatObject.addGrillMeat(grill);

	//# Liga a Grelha
	this.grillElement.style='background-image:url("assets/img/textura_grill_on.png")';

	// Cozinha a carne
	let cook_timer=setTimeout(function(){
			meatItem.src='assets/img/carne_assada.png';
			console.log(meatItem);
			clearTimeout(cook_timer);
	},5000);

	
}
