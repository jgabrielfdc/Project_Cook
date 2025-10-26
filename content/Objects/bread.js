import plate from "./Plate.js";

class Bread {
	constructor() {
		this.breadTop = getElement('bread_top');
		this.breadBase = getElement('bread_base');

		this.addBreadBase();
		this.addBreadTop();
	}

	createBread() {
		const breadItem = document.createElement('img');
		breadItem.id = 'bread_base';
		breadItem.src = 'assets/img/pao_base.png';
		breadItem.alt = 'Base de Pão';
		breadItem.classList.add('bread-item');
		return breadItem;
	}

	addBreadBase() {
		this.breadBase.onmouseup = () => {
			try {
				const freePlate = plate.getFreePlate();
				if (freePlate) {
					freePlate.appendChild(this.createBread());
				} else {
					console.warn('Nenhum prato livre disponível.');
				}
			} catch (erro) {
				console.error('Erro ao adicionar base do pão:', erro.message);
			}
		}
	}

	addBreadTop() {

		this.breadTop.onmouseup = () => {
			try {
					let prato = plate.getStep();
					if (!prato) {
						throw new Error('Precisa de um Hamburguer');
					}
					if (prato.id == 'burguer_step') {
						prato.id = 'burguer';
						prato.src = 'assets/img/burguer.png';
						prato.alt = 'Burguer';

					}

					if (prato.id == 'hamburguer_step') {
						prato.id = 'hamburguer';
						prato.src = 'assets/img/hamburguer.png';
						prato.alt = 'Hamburguer';

					}

					if (prato.id == 'cheeseburguer_step') {
						prato.id = 'cheeseburguer';
						prato.src = 'assets/img/cheeseburguer.png';
						prato.alt = 'Chesseburguer';
					}

			} catch (erro) {
				console.error('Erro ao adicionar topo do pão:', erro.message);
			}
		}
	}
}

const bread=new Bread();

export default bread;