class Bread {
	constructor(source) {
		this.source = source;
	}

	createBread() {
		const breadItem = document.createElement('img');
		breadItem.id = 'bread_base';
		breadItem.src = '../assets/img/pao_base.png';
		breadItem.alt = 'Base de Pão';
		breadItem.classList.add('bread-item');
		return breadItem;
	}

	addBreadBase(getFreePlate) {
		if (!this.source || typeof getFreePlate !== 'function') {
			console.error('Fonte do pão ou função getFreePlate inválida.');
			return;
		}

		this.source.onmouseup=() => {
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

	addBreadTop(findStep) {
		if (!this.source || typeof findStep !== 'function') {
			console.error('Fonte do pão ou função findStep inválida.');
			return;
		}

		this.source.onmouseup= () => {
			try {
				const step = findStep('burguer_step1');
				if (!step) {
					throw new Error('Precisa de um Hamburguer');
				}
				step.id = 'burguer';
				step.src = '../assets/img/burguer.png';
				step.alt = 'Hamburguer Pronto';
			} catch (erro) {
				console.error('Erro ao adicionar topo do pão:', erro.message);
			}
		}
	}
}
