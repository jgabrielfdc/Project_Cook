class Grill {
	constructor(grillElement, grillSlots) {
		this.grillElement = grillElement;
		this.grillSlots = grillSlots;
	}
}

Grill.prototype.cookMeat = function (meatItem) {
	// Atualiza visual da grelha ao adicionar carne
	this.updateGrillVisual();

	// Cozinha a carne após 5 segundos
	setTimeout(() => {
		meatItem.id = 'cooked_meat';
		meatItem.src = 'assets/img/carne_assada.png';
		this.updateGrillVisual(); // Atualiza visual novamente se necessário
	}, 5000);
};

Grill.prototype.serveMeat = function (getPlate) {
	this.grillElement.addEventListener('click', () => {
		const grillItems = Array.from(this.grillElement.children);

		grillItems.forEach((item) => {
			item.addEventListener('mouseup', () => {
				if (item.id === 'cooked_meat') {
					const breadPlate = getPlate('bread_base');

					if (breadPlate) {
						item.remove();

						breadPlate.id = 'burguer_step1';
						breadPlate.src = 'assets/img/burguer_step1.png';

						this.updateGrillVisual();
					}
				}
			});
		});
	});
};

// Atualiza visual da grelha automaticamente com base no número de carnes
Grill.prototype.updateGrillVisual = function () {
	const topoGrelha = document.getElementById('topo__grelha');
	if (this.grillElement.children.length === 0) {
		topoGrelha.style.backgroundImage = 'url("assets/img/grelha_off.png")';
	} else {
		topoGrelha.style.backgroundImage = 'url("assets/img/grelha_on.png")';
	}
};
