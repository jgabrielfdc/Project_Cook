<<<<<<< HEAD
//* # Objetos
import soda from "./content/Objects/Soda.js";
import bread from "./content/Objects/Bread.js";
import cheese from "./content/Objects/Cheese.js";
import customer from "./content/Objects/Customers.js";
import grill from "./content/Objects/Grill.js";
import lettuce from "./content/Objects/Lettuce.js";
import meat from "./content/Objects/Meat.js";
import plate from "./content/Objects/Plate.js";

//* # Componentes GUI
import recipe_book from "./content/UI/RecipeBook.js";
import coins from "./content/UI/Coins.js";
=======
import Coins from "./content/UI/coins.js";
import Soda from "./content/Objects/soda.js";
import Bread from "./content/Objects/bread.js";
import Cheese from "./content/Objects/cheese.js";
import Customer from "./content/Objects/client.js";
import Grill from "./content/Objects/grill.js";
import Lettuce from "./content/Objects/lettuce.js";
import Meat from "./content/Objects/meat.js";
import Plate from "./content/Objects/plates.js";

// # Variáveis Iniciais
const products = [
	'burguer',
	'hamburguer',
	'cheeseburguer',
	'refrigerante_cola',
	'refrigerante_lima',
	'refrigerante_uva'
];

const skins = [
    '#F7F342', 
    '#568923', 
    '#F93A52', 
    '#68D930', 
    '#43EC22'
];

const faces = [
    'O_O', 
    '0_0', 
    '-_-', 
    '=_=', 
    'O-O', 
    '*-*', 
    '*_*', 
    '1_1'
];

// # Instância os elementos de UI
let coins=new Coins(getElement('pontos'));

// # Instancia os Objects do Jogo
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

//? # Montar Sanduíche

//* Lv.1
breadBase.addBreadBase(() => plates.getFreePlate());
grill.serveMeat(() => plates.getPlate('bread_base'));

//* Lv.2
lettuce.addLettuce(plates);

//* Lv.3
cheese.addCheese(plates);

//! Finalizar Sanduiche
breadTop.addBreadTop(() => plates.getStep());

//? Coloca no Prato
plates.serveFood(getElement('plates'), getElement('clientes'), customer,coins);



const pages = ['capa', 'tutorial_carne', 'receita_burguer', 'receita_hamburguer', 'receita_cheeseburguer'];

let numPg = 0;
function openModal(element) {
    element.style.display = 'flex'; // Use flex to center
}
function closeModal(element) {
    element.style.display = 'none';
}

function pageForward(){
    if(pages[numPg+2]==undefined){
        getElement('LeftA').style.display='none';
    }
    if(pages[numPg+1]!==undefined){
        numPg++;
        getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
        getElement('RightA').style.display='flex';
    }else{
        getElement('LeftA').style.display='none';
    }
}
function pageBackward(){
    if(pages[numPg-2]!==undefined){
        numPg--;
        getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
        getElement('LeftA').style.display='flex';
    }else{
        getElement('RightA').style.display='none';
    }
}

window.onload = () => {
    getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
}

    const closeButton = document.querySelector('.modal__close-btn');
    // Function to open the modal
    window.onkeydown = (event) => {
        if (event.key == 'e' && event.keyCode == 69) {
            if (getElement('menuModal').style.display == 'none' && getElement('recipesModal').style.display=='none') {
                openModal(getElement('menuModal'));
                getElement('menu').innerHTML = "<div class='menu__option' onclick='closeModal()'>Voltar ao Jogo</div>" +
                    "<div class='menu__option' onclick='feedback()'>Configurações</div>" +
                    "<div class='menu__option'>Opção 3</div>";
            } else {
                closeModal(getElement('menuModal'));
            }
        }
        if (event.key == 'r' && event.keyCode == 82) {
            if (getElement('recipesModal').style.display == 'none' && getElement('menuModal').style.display=='none') {
                openModal(getElement('recipesModal'));
                
            } else {
                closeModal(getElement('recipesModal'));
            }
        }
        if (event.key == 'ArrowRight' && event.keyCode == 39) {
          pageForward()
        }
        if (event.key == 'ArrowLeft' && event.keyCode == 37) {
          pageBackward()
        }
    }

    closeModal(getElement('recipesModal'));
    closeModal(getElement('menuModal'));

document.querySelectorAll('#refrigerante').forEach(function(item){
    item.onclick=function(event){
        let sabor=$(event.target).attr('name');
        soda.serveSoda(sabor,coins);
    }   
});

export default products;
>>>>>>> Performance
