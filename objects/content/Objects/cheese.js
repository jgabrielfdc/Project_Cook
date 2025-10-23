class Cheese{
	addCheese(plates){
		getElement('cheese').onmouseup=function(){
			let cheeseburguer_step=plates.getPlate('hamburguer_step');
			cheeseburguer_step.src='assets/img/cheeseburguer_step.png';
			cheeseburguer_step.id='cheeseburguer_step';
		}
	}
}