// #Recupera Elemento
this.getElement = function (id) {
	return document.getElementById(id);
}

this.toArray = function (object) {
	return Array.from(object);
}

this.randomNumber = function (range) {
	return Math.round(Math.random() * range) + 1;
}

this.getImage=function(image){
	return `./asset/img/${image}.png`;
}

this.getSound=function(sound){
	return `./asset/media/${sound}.mp3`;
}