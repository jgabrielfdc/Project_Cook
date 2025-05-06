/*const productList=['meat','rice'];
function orderGenerate(){
	let clientOrderAmount=(Math.round(Math.random()*2)+1);
	let clientOrder=[];

	for (let i=0; i<clientOrderAmount; i++){
	let randomProduct=Math.floor(Math.random()*productList.length);
		let order=productList[randomProduct]
		clientOrder.push(order);
	}

	return clientOrder;

}

const clientColors=['#F7F342','#568923','#F93A52','#68D930','#43EC22'];
const clientFaces=['O_O','0_0','-_-','=_=','O-O','*-*','*_*','1_1'];

function clientGenerate(){
	let clientAttributes=[];
	let randomColor=Math.floor((Math.random()*clientColors.length));
	let randomFace=Math.floor((Math.random()*clientFaces.length));
	clientAttributes={
		'color': clientColors[randomColor],
		'face': clientFaces[randomFace]};
	return clientAttributes;
}


let randomTimer; // Declara randomTimer fora do setInterval
let clientGenerator=undefined;
let continuar=true;
let deskSize=0;

function gerarCliente() {
	
	// Se existir mais de 5 pessoas no balcão não gera mais
	if(deskSize<=4 && continuar){
		
		// Gera um intervalo aleatorio
		randomTimer = Math.round(Math.random() * 20) * 1000;
	
		//Criando o elemento do cliente e recuperando suas caracteristicas e pedidos
		let client=document.createElement('div');
		let clientOrder=orderGenerate();
		let clientAttributes=clientGenerate();
  	
		let clientOrders=document.createElement('div');
		clientOrders.className='orders';
		let amountItems=clientOrder.length;

		for(let i=0;i<amountItems;i++){
		let item=document.createElement('span');
		item.className='order';
		item.innerText="- "+clientOrder[i];
		clientOrders.appendChild(item);	
		}
	
		let clientFace=document.createElement('div')
		clientFace.className='face';
		clientFace.innerText=clientAttributes['face'];
		clientFace.style.backgroundColor=clientAttributes['color'];
	
		client.className='cliente';
		client.appendChild(clientOrders);
		client.appendChild(clientFace);
	

		let clientList=document.getElementById('clientes');
		clientList.appendChild(client);

		// Limpa o intervalo anterior (se existir)
 		clearInterval(clientGenerator);

		// Define um novo intervalo com o novo tempo aleatório
 		clientGenerator = setInterval(gerarCliente, randomTimer);
	}
		
	// Atualiza a quantidade de pessoas na mesa
	deskSize=document.getElementById('clientes').children.length;
}

// Chamada inicial para iniciar o processo
gerarCliente();*/