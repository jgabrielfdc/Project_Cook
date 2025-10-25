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