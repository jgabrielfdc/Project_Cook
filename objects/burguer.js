class Burguer{
	createBurguer(breadTop,plates){
		breadTop.addBreadTop(() => plates.getPlate('burguer_step'),'burguer_step');
	}
}