class Bread{
	constructor(source){
		this.source=source;
	}
}

Bread.prototype.addBread=function(){
	this.source.addEventListener('click',function(){
		console.log('Pão');
	})
}