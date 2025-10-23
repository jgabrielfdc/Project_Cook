class Lettuce {
	addLettuce(plates) {
		getElement('lettuce').onmouseup = function () {
			let hamburguer_step = plates.getPlate('burguer_step');
			hamburguer_step.src = 'assets/img/hamburguer_step.png';
			hamburguer_step.id = 'hamburguer_step';
		}
	}
}