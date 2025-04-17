const plateList = document.getElementsByClassName('plate__item');
const plateListSize = plateList.length;

for(let index=0;index<plateListSize;index++){
	let plateItem=plateList[index];
	plateItem.addEventListener('click',function(){
		alert(this.id);
		
	});
}