class Plate {
	constructor(plateGroup) {
		this.plateGroup = Array.from(plateGroup.children);
	}

	getFreePlate() {
		return this.plateGroup.find(plate => plate.children.length === 0);
	}

	getPlate(target) {
		try {
			const firstChildren = this.plateGroup
				.map(item => item.children[0])
				.filter(Boolean); // Garante que não haja `undefined`

			const plate = firstChildren.find(child => child.id === target);

			if (!plate) {
				throw new Error('Sem Fase');
			}

			return plate;
		} catch (erro) {
			console.error('Erro ao obter plate:', erro.message);
			return null;
		}
	}
}
