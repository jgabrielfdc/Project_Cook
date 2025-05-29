class Meat {
	meatID='meat';
	meatTexture='assets/img/carne_crua.png';
	
	constructor(meatSource, meatCookingTime) {
		this.meatSource = meatSource;
		this.meatCookingTime = meatCookingTime;
	}

	createMeat() {
		const meatItem = document.createElement('img');
		meatItem.alt = `Meat ${this.meatID}`;
		meatItem.dataset.id = this.meatID;
		meatItem.src = this.meatTexture;
		meatItem.classList.add('meat-item'); 
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
