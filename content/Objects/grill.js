import plate from "./Plate.js";
class Grill {
	constructor() {
		this.grillElement = getElement('grelha');
		this.grillSlots = 3;

		this.serveMeat()
	}

	serveMeat(){
		this.grillElement.onmouseup = () => {
			const grillItems = toArray(this.grillElement.children);
			grillItems.forEach(item => {
				item.onmouseup = () => {
					if (item.id === 'cooked_meat') {
						const breadPlate = plate.getPlate('bread_base');
	
						if (breadPlate) {
							item.remove();
	
							breadPlate.id = 'burguer_step';
							breadPlate.src = getImage("burguer_step");
	
							this.updateGrillVisual();
						}
					}
				}
			})
		}
	}

	cookMeat(meatItem){

		this.updateGrillVisual();
	
		setTimeout(() => {
			meatItem.id = 'cooked_meat';
			meatItem.src = getImage('carne_assada');
			this.updateGrillVisual();
		}, 5000);
	}

	updateGrillVisual(){
		const topoGrelha = document.getElementById('topo__grelha');
		if (this.grillElement.children.length === 0) {
	
			topoGrelha.style.backgroundImage = `url("${getImage('grelha_off')}")`;
	
		} else {
	
			topoGrelha.style.backgroundImage = `url("${getImage('grelha_on')}")`;
	
		}
	}

}

const grill=new Grill();

export default grill