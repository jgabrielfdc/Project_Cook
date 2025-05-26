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

	addBreadTop(findStep,string) {
		if (!this.source || typeof findStep !== 'function') {
			console.error('Fonte do pão ou função findStep inválida.');
			return;
		}

		this.source.onmouseup= () => {
			try {
				console.log(string)
				console.log(findStep)
				const step = findStep(string);
				if (!step) {
					throw new Error('Precisa de um Hamburguer');
				}
				console.log(step)
				if(step.id=='burguer_step'){
					step.id = 'burguer';
					step.src = '../assets/img/burguer.png';
					step.alt = 'Burguer';
				
				}

				if(step.id=='hamburguer_step'){
					step.id = 'hamburguer';
					step.src = '../assets/img/hamburguer.png';
					step.alt = 'Hamburguer';
				
				}

				if(step.id=='cheeseburguer_step'){
					step.id = 'cheeseburguer';
					step.src = '../assets/img/cheeseburguer.png';
					step.alt = 'Chesseburguer';
				
				}else{
					console.log(step.id)
					console.log(step)
					throw new Error('Precisa de Carne');
				}
								
			} catch (erro) {
				console.error('Erro ao adicionar topo do pão:', erro.message);
			}
		}
	}
}
