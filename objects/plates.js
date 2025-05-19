class Plate{
	constructor(plateGroup){
		this.plateGroup=plateGroup.children;
	}
}

Plate.prototype.getFreePlate=function(){
	let plates=Array.from(this.plateGroup);
	return plates.find(value=>value.children.length==0);
}

Plate.prototype.getPlate=function(target){
	let output=Array.from(this.plateGroup);
	let output2=[];
	try{
		output.forEach(function(item){
			output2.push(item.children[0])
		})
		
		if(!output2.find(value=>value.id==target)){
			throw new Error('Sem Fase');
		}
		return output2.find(value=>value.id==target);
		
	}catch(erro){
		console.log(erro);
	}
}