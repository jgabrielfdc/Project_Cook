import plate from "./Plate.js";
class Lettuce {
	constructor(){
		this.addLettuce()
	}
	addLettuce() {
		getElement('lettuce').onmouseup = function () {
			let hamburguer_step = plate.getPlate('burguer_step');
			hamburguer_step.src = getImage("hamburguer_step");
			hamburguer_step.id = 'hamburguer_step';
		}
	}
}

const lettuce=new Lettuce();

export default lettuce;