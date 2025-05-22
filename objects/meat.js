class Meat {
	constructor(meatSource, meatID, meatTexture, meatCookingTime) {
		this.meatSource = meatSource;
		this.meatID = meatID;
		this.meatTexture = meatTexture;
		this.meatCookingTime = meatCookingTime;
	}

	createMeat() {
		const meatItem = document.createElement('img');
		meatItem.alt = `Meat ${this.meatID}`;
		meatItem.dataset.id = this.meatID;
		meatItem.src = this.meatTexture || '../assets/img/carne_crua.png';
		meatItem.classList.add('meat-item'); // Boa prática para estilização futura
		return meatItem;
	}

	addGrillMeat(grill) {
		if (!this.meatSource || !grill || !grill.grillElement) {
			console.error('Meat source ou grill inválido.');
			return;
		}

		this.meatSource.addEventListener('mouseup', () => {
			const currentSlots = grill.grillElement.children.length;
			if (currentSlots < grill.grillSlots) {
				const meatItem = this.createMeat();
				grill.grillElement.appendChild(meatItem);
				grill.cookMeat(meatItem);
			} else {
				console.warn('Grelha cheia. Não é possível adicionar mais carne.');
			}
		});
	}
}
