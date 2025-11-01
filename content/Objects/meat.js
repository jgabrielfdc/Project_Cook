import grill from "./Grill.js";
class Meat {
	meatID = 'meat';
	meatTexture = 'public/assets/img/carne_crua.png';
	meatSource = getElement('meat');
	meatCookingTime=5

	constructor() {
		this.addGrillMeat()
	}

	createMeat() {
		const meatItem = document.createElement('img');
		meatItem.alt = `Meat ${this.meatID}`;
		meatItem.dataset.id = this.meatID;
		meatItem.src = this.meatTexture;
		meatItem.classList.add('meat-item');
		return meatItem;
	}

	addGrillMeat() {

		this.meatSource.onmouseup= () => {
			const currentSlots = grill.grillElement.children.length;
			if (currentSlots < grill.grillSlots) {
				const meatItem = this.createMeat();
				grill.grillElement.appendChild(meatItem);
				grill.cookMeat(meatItem);
			} else {
				console.warn('Grelha cheia. Não é possível adicionar mais carne.');
			}
		};
	}
}
const meat=new Meat();
export default meat;