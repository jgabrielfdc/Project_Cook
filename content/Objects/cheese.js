import plate from "./Plate.js";

class Cheese{
	constructor(){
		this.addCheese();
	}
	
	addCheese(){
		getElement('cheese').onmouseup=function(){
			let cheeseburguer_step=plate.getPlate('hamburguer_step');
			cheeseburguer_step.src='assets/img/cheeseburguer_step.png';
			cheeseburguer_step.id='cheeseburguer_step';
		}
	}
}

const cheese=new Cheese();

export default cheese