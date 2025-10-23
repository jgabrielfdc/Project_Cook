class Bread {
	constructor(source) {
		this.source = source;
	}

	createBread() {
		const breadItem = document.createElement('img');
		breadItem.id = 'bread_base';
		breadItem.src = 'assets/img/pao_base.png';
		breadItem.alt = 'Base de Pão';
		breadItem.classList.add('bread-item');
		return breadItem;
	}

	addBreadBase(getFreePlate) {
		if (!this.source || typeof getFreePlate !== 'function') {
			console.error('Fonte do pão ou função getFreePlate inválida.');
			return;
		}

		this.source.onmouseup = () => {
			try {
				const freePlate = getFreePlate();
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

	addBreadTop(pratos) {
		if (!this.source || typeof pratos !== 'function') {
			console.error('Fonte do pão ou função findStep inválida.');
			return;
		}

		this.source.onmouseup = () => {
			try {
				let prato = pratos();
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

				} else {
					throw new Error('Precisa de Carne');
				}

			} catch (erro) {
				console.error('Erro ao adicionar topo do pão:', erro.message);
			}
		}
	}
}