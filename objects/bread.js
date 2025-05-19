class Bread{
	constructor(source){
		this.source=source;
	}
}

Bread.prototype.createBread=function(){
	let breadItem=document.createElement('img');
		breadItem.id='bread_base';
		breadItem.innerText='';
		breadItem.src='assets/img/pao_base.png';
	
	return breadItem;
}

Bread.prototype.addBreadBase=function(getFreePlate){
	let self=this;
	this.source.onmouseup=()=>{
		try{
			let freePlate=getFreePlate();

			if(freePlate!=undefined){
				freePlate.appendChild(self.createBread());
			}
		}catch(erro){
		
		}
	}
}

Bread.prototype.addBreadTop=function(findStep){
	
	this.source.onmouseup=()=>{
		try{
			let step=findStep('burguer_step1')	
			console.log(step);
			if(step==undefined){
				throw new Error('Precisa de um Hamburguer')
			}
		}catch(erro){
			console.log(erro)
		}
	}
}