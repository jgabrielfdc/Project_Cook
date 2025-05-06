class Meat{
	constructor(meatID,meatTexture,meatCookingTime){
		this.meatID=meatID;
		this.meatTexture=meatTexture;
		this.meatCookingTime=meatCookingTime;
	}
}

Meat.prototype.addGrillMeat=(grill)=>{
	console.log('teste');	
}
let meatSource=document.getElementById('meat');

let i=0;
meatSource.addEventListener('click',function(){
	i++;
	let varName='meat'+i;
	let (varName)=new Meat('meat','transparent',i);
	console.log(meat);
})

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



