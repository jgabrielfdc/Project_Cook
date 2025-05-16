// # Variaveis Iniciais
const products=['burguer',
				'hamburguer',
				'cheeseburguer',
				'refrigerante_cola',
				'refrigerante_lima',
				'refrigerante_uva'];

const skins=['#F7F342',
			'#568923',
			'#F93A52',
			'#68D930',
			'#43EC22'];

const faces=['O_O',
			'0_0',
			'-_-',
			'=_=',
			'O-O',
			'*-*',
			'*_*',
			'1_1'];

let randomSkin;
let randomFace;
let randomTimer; // Declara randomTimer fora do setInterval
let customerGenerator=undefined;
let deskSize=0;

//# Recupera os objetos;
function getElement(element){
	return document.getElementById(element);
}

const grill = new Grill(getElement('grelha'),3);
const plates = new Plate(getElement('plates'));
const bread = new Bread(getElement('bread'));
let meat= new Meat(getElement('meat'),'meat','green',5);;
const customer=new Customer(products,faces,skins);

bread.addBread();
customer.createCustomer();

//# Inicia o Placar
let pontos=0;
document.getElementById('pontuacao').innerText='Pontos: '+pontos;
grill.cookMeat();
meat.addGrillMeat(grill);

// # Servir Carne
grill.serveMeat(()=>plates.getFreePlate());












/*
//# Recupera os pratos e cria o evento 

plates.addEventListener('click',function(event){
			
		//# Recuperas os clientes
		let findOrder=false;
		let element=event.target;
		let allCustomers=document.getElementById('clientes').children;

		if(element.matches('#cooked_meat')){
			for(let i=0;i<allCustomers.length;i++){
			
			//# Recupera o cliente
			let customer=allCustomers[i];

			//# Recupera os pedidos
			let customerOrder=customer.children[0].children;
			for(let i=0;i<customerOrder.length;i++){
					console.log(customerOrder[i].innerText);
				//# Verifica cada pedido e finaliza caso encontre
				if(customerOrder[i].innerText=="- meat"){
						
						//# Remove o target e o pedido (Efeito de entrega)
						element.remove()
						customerOrder[i].remove();
						pontos+=10;
						findOrder=true;
					break;
				}
			}
			
			if(findOrder){
				document.getElementById('pontuacao').innerHTML='Pontos: '+pontos;
				console.log(customerOrder)
				if(customerOrder.length==0){
					console.log('Vazia')
					pontos+=30;
					customer.remove()
					document.getElementById('pontuacao').innerHTML='Pontos: '+pontos;
				}
				break;
			
			}
	}
		}
})*/
