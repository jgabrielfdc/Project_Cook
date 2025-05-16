class Plate{
	constructor(plateGroup){
		this.plateGroup=plateGroup.children;
	}
}

Plate.prototype.getFreePlate=function(){
	this.plateGroup=Array.from(this.plateGroup);
	return this.plateGroup.find(value=>value.children.length==0);
}