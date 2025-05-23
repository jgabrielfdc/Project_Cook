// #Recupera Elemento
this.getElement=function(id) {
	return document.getElementById(id);
}

this.toArray(object){
	return Array.from(object)	
}

this.randomNumber(range){
	return Math.round(Math.random()*range)+1
}