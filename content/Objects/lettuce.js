import plate from "./Plate.js";
class Lettuce {
	constructor(){
		this.addLettuce()
	}
	addLettuce() {
		getElement('lettuce').onmouseup = function () {
			let hamburguer_step = plate.getPlate('burguer_step');
			hamburguer_step.src = 'assets/img/hamburguer_step.png';
			hamburguer_step.id = 'hamburguer_step';
		}
	}
}

const lettuce=new Lettuce();

export default lettuce;