class Plate {
	constructor(plateGroup) {
		this.plateGroup = toArray(plateGroup.children);
	}

	getFreePlate() {
		return this.plateGroup.find(plate => plate.children.length === 0);
	}

	getStep() {
		return this.plateGroup.find(plate => {
			if (plate.children.length !== 1) return false;
			const id = plate.children[0].id;
			return !['burguer', 'hamburguer', 'cheeseburguer'].includes(id);
		})?.children[0] || null;
	}

	// Jogar fora (a ser implementado futuramente)
	trashItem() {
		// Placeholder para descarte de itens
	}

	getPlate(target) {
		try {
			const firstChildren = this.plateGroup
				.map(plate => plate.children[0])
				.filter(Boolean);

			const plate = firstChildren.find(child => child.id === target);
			if (!plate) throw new Error('Sem Fase');

			return plate;
		} catch (erro) {
			console.error('Erro ao obter plate:', erro.message);
			return null;
		}
	}

	serveFood(plates, customers, customerObject) {
		plates.onclick = (event) => {
			const target = event.target;
			const validClasses = ['plate__item', 'pao_base'];
			if (!validClasses.includes(target.className)) {
				const orders = toArray(customers.getElementsByTagName('img'));
				const product = orders.find(item => item.id === target.id);

				if (product) {
					const customer = product.closest('.cliente') || product.parentNode.parentNode;
					product.remove();
					target.remove();
					coins.updateCoins(product.id);
					customerObject.verifyOrders(customer);
				}
			}
		};
	}
}
