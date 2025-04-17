const meat = document.getElementById('meat');
const grill = document.getElementById('grelha')

meat.addEventListener('click',function(){
	let meatItem=document.createElement('span');
	meatItem.id='meat';
	meatItem.innerText='Meat';
	console.log(meatItem);
	console.log(grill)
	grill.appendChild(meatItem);
	grill.style='background-image:url("../img/grelha_on.png")';
})