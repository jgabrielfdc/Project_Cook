class Lettuce{
	hamburguerStep='../assets/img/hamburguer_step.png';

	addLettuce(plates){
		getElement('lettuce').onmouseup=function(){
			plates.getPlate('burguer_step').src='../assets/img/hamburguer_step.png';
		}
	}
}