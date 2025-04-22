const meat = document.getElementById('meat');
const grill = document.getElementById('grelha');

meat.addEventListener('click',function(){
	let grill_content_count=grill.childElementCount;

	if(grill_content_count<3){
		let meatItem=document.createElement('span');
		meatItem.id='meat';
		meatItem.innerText='Meat';
		meatItem.style='color:transparent';
		
		grill.appendChild(meatItem);
		grill.style='background-image:url("assets/img/textura_grill_on.png")';
		
		let time_cooking=setTimeout(function(){
			meatItem.id='cooked_meat';
			console.log('Cozido');
			clearTimeout(time_cooking);
		},5000);
	}
})



