class Meat{
	constructor(meatID,meatTexture,meatCookingTime){
		this.meatID=meatID;
		this.meatTexture=meatTexture;
		this.meatCookingTime=meatCookingTime;
	}
}

Meat.prototype.addGrillMeat=function(grill){	
	if(grill.grillElement.children.length<grill.grillSlots){
		
		// Cria um elemento carne
		let meatItem=document.createElement('span');
			meatItem.id=this.meatID;
			meatItem.innerText=this.meatID;
			meatItem.style.backgroundColor=this.meatTexture;
			//meatItem.style.backgroundSize=80px;
			
		//* Adiciona a carne na grelha
		grill.grillElement.appendChild(meatItem);

		return meatItem;
	}
}

/*//# Executa ao clicar na carne
meat.addEventListener('click',function(){
	
	//# Recupera a quantidade de itens na grelha
	let grill_content_count=grill.childElementCount;

	//# Limita a carne na grelha
	if(grill_content_count<grill_limit){
		
		//* Cria um elemento carne
		let meatItem=document.createElement('span');
			meatItem.id='meat';
			meatItem.innerText='Meat';
			meatItem.style='color:transparent';
		
		//* Adiciona a carne na grelha
		grill.appendChild(meatItem);
		grill.style='background-image:url("assets/img/textura_grill_on.png")';
		
		
		let cook_timer=setTimeout(function(){
			meatItem.id='cooked_meat';
			clearTimeout(cook_timer);
		},5000);
	}
})*/



