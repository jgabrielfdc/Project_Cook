class Meat{
	constructor(meatSource,meatID,meatTexture,meatCookingTime){
		this.meatSource=meatSource;
		this.meatID=meatID;
		this.meatTexture=meatTexture;
		this.meatCookingTime=meatCookingTime;
	}
}

Meat.prototype.createMeat=function(){

		let meatItem=document.createElement('img');
			meatItem.innerText=this.meatID;
			meatItem.src='assets/img/carne_crua.png';

		return meatItem;
}

Meat.prototype.addGrillMeat=function(grill){	
	let self=this;
		this.meatSource.addEventListener('mouseup',function(){
			if(grill.grillElement.children.length<grill.grillSlots){
				let meatItem=self.createMeat();
				grill.grillElement.appendChild(meatItem);
				grill.cookMeat(meatItem);
			}
		})
}

