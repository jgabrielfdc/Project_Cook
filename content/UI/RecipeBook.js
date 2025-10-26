class RecipeBook{
    pages=['capa', 'tutorial_carne', 'receita_burguer', 'receita_hamburguer', 'receita_cheeseburguer'];
    numPg = 0;
    openBook=false;
    constructor(){
        this.toggleBook();
        this.pageSwitch();
    }

    toggleBook(){
        let buttons=['open','close'];
        buttons.forEach((button)=>{
            document.getElementById(`${button}_recipe`).onclick=()=>{
                if(!this.openBook){
                            getElement("recipesModal").style.display="flex";
                            this.openBook=true;
                        }else{
                            getElement("recipesModal").style.display="none";
                            this.openBook=false;
                        }
            };
        })
    }

    pageSwitch(){


    }

// function pageForward(){
//     if(pages[numPg+2]==undefined){
//         getElement('LeftA').style.display='none';
//     }
//     if(pages[numPg+1]!==undefined){
//         numPg++;
//         getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
//         getElement('RightA').style.display='flex';
//     }else{
//         getElement('LeftA').style.display='none';
//     }
// }
// function pageBackward(){
//     if(pages[numPg-2]!==undefined){
//         numPg--;
//         getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
//         getElement('LeftA').style.display='flex';
//     }else{
//         getElement('RightA').style.display='none';
//     }
// }

// window.onload = () => {
//     getElement('recipe-book').src = `assets/img/recipe_book/${pages[numPg]}.png`;
// }

//     const closeButton = document.querySelector('.modal__close-btn');
//     // Function to open the modal
//     window.onkeydown = (event) => {
//         if (event.key == 'e' && event.keyCode == 69) {
//             if (getElement('menuModal').style.display == 'none' && getElement('recipesModal').style.display=='none') {
//                 openModal(getElement('menuModal'));
//                 getElement('menu').innerHTML = "<div class='menu__option' onclick='closeModal()'>Voltar ao Jogo</div>" +
//                     "<div class='menu__option' onclick='feedback()'>Configurações</div>" +
//                     "<div class='menu__option'>Opção 3</div>";
//             } else {
//                 closeModal(getElement('menuModal'));
//             }
//         }
//         if (event.key == 'r' && event.keyCode == 82) {
//             if (getElement('recipesModal').style.display == 'none' && getElement('menuModal').style.display=='none') {
//                 openModal(getElement('recipesModal'));
                
//             } else {
//                 closeModal(getElement('recipesModal'));
//             }
//         }
//         if (event.key == 'ArrowRight' && event.keyCode == 39) {
//           pageForward()
//         }
//         if (event.key == 'ArrowLeft' && event.keyCode == 37) {
//           pageBackward()
//         }
//     }

//     closeModal(getElement('recipesModal'));
//     closeModal(getElement('menuModal'));

}

const recipe_book=new RecipeBook();
export default recipe_book;