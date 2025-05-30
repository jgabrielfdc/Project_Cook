class Grill {
	constructor(grillElement, grillSlots) {
		this.grillElement = grillElement;
		this.grillSlots = grillSlots;
	}
}

Grill.prototype.cookMeat = function (meatItem) {

	this.updateGrillVisual();

	setTimeout(() => {
		meatItem.id = 'cooked_meat';
		meatItem.src = 'assets/img/carne_assada.png';
		this.updateGrillVisual();
	}, 5000);
};

Grill.prototype.serveMeat = function (getPlate) {
	this.grillElement.onmouseup = () => {
		const grillItems = toArray(this.grillElement.children);
		grillItems.forEach(item => {
			item.onmouseup = () => {
				if (item.id === 'cooked_meat') {
					const breadPlate = getPlate('bread_base');

					if (breadPlate) {
						item.remove();

						breadPlate.id = 'burguer_step';
						breadPlate.src = 'assets/img/burguer_step.png';

						this.updateGrillVisual();
					}
				}
			}
		});
	}
};

Grill.prototype.updateGrillVisual = function () {
	const topoGrelha = document.getElementById('topo__grelha');
	if (this.grillElement.children.length === 0) {

		topoGrelha.style.backgroundImage = 'url("assets/img/grelha_off.png")';

	} else {

		topoGrelha.style.backgroundImage = 'url("assets/img/grelha_on.png")';

	}
};
