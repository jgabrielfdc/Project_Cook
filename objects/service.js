
// # Variáveis Iniciais
const products = [
	'burguer',
	'hamburguer',
	'cheeseburguer',
	'refrigerante_cola',
	'refrigerante_lima',
	'refrigerante_uva'
];

const skins = ['#F7F342', '#568923', '#F93A52', '#68D930', '#43EC22'];

const faces = ['O_O', '0_0', '-_-', '=_=', 'O-O', '*-*', '*_*', '1_1'];

let randomSkin;
let randomFace;
let randomTimer;
let customerGenerator = undefined;
let deskSize = 0;

// # Instancia os objetos
const grill = new Grill(getElement('grelha'), 3);
const plates = new Plate(getElement('plates'));
const breadTop = new Bread(getElement('bread_top'));
const breadBase = new Bread(getElement('bread_base'));
const meat = new Meat(getElement('meat'), 'meat', '../assets/img/carne_crua.png', 5);
const customer = new Customer(products, faces, skins);
const soda=new Soda(customer);

customer.createCustomer();

// # Inicia o placar
let pontos = 0;
getElement('pontuacao').innerText = 'Pontos: ' + pontos;

// # Associa eventos
meat.addGrillMeat(grill);

// # Servir carne
breadTop.addBreadTop(() => plates.getPlate('burguer_step1'));
breadBase.addBreadBase(() => plates.getFreePlate());
grill.serveMeat(() => plates.getPlate('bread_base'));
plates.serveFood(getElement('plates'),getElement('clientes'),customer)