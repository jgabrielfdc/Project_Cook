const plateList = document.getElementsByClassName('plate__item');
const plateListSize = plateList.length;
let firstPlate=undefined;


function listFreePlates(){
	for(let index=0;index<plateListSize;index++){
		let plateItem=plateList[index];
		let plateItem_content_count=plateItem.childElementCount;
		if(plateItem_content_count==0 ){
			freePlate=plateItem;
			return freePlate;
		}
	}

}

grill.addEventListener('click',function(){
	let grillItems=grill.children;
	if(grillItems[0].id=='cooked_meat'){
		let cookedMeatItem=grillItems[0];
		let freePlate=listFreePlates();
		if(cookedMeatItem.parentElement.className!='plate__item'){
			freePlate.appendChild(cookedMeatItem);
		}
	}
})
	
