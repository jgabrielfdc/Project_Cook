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
const coins=new Coins(getElement('pontos'));
const customer = new Customer(products, faces, skins);
const grill = new Grill(getElement('grelha'), 3);
const plates = new Plate(getElement('plates'));

const breadTop = new Bread(getElement('bread_top'));
const breadBase = new Bread(getElement('bread_base'));
const soda = new Soda(customer);
const meat = new Meat(getElement('meat'), 5);
const lettuce = new Lettuce();
const cheese = new Cheese();
// # Geração de Clientes
customer.createCustomer();

// # Adiciona carne à grelha
meat.addGrillMeat(grill);

// # Montar Sanduíche
breadTop.addBreadTop(() => plates.getStep());
breadBase.addBreadBase(() => plates.getFreePlate());
grill.serveMeat(() => plates.getPlate('bread_base'));

lettuce.addLettuce(plates);
cheese.addCheese(plates);

plates.serveFood(getElement('plates'), getElement('clientes'), customer);
