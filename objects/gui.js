   function openModal() {
        menuModal.style.display = 'flex'; // Use flex to center
    }
     function closeModal() {
        menuModal.style.display = 'none';
    }

function feedback(){
	getElement('menu').innerHTML="<p 'style=color:#F00;'>Não temos orçamento pra isso</p><p class='menu__option' onclick='closeModal()'>Voltar</p>"
}


document.addEventListener('DOMContentLoaded', () => {
    const menuModal = document.getElementById('menuModal');
    const closeButton = document.querySelector('.modal__close-btn');
    // Function to open the modal
    onkeypress=(event)=>{
	if(event.key=='e' && event.keyCode==101){
		if(menuModal.style.display=='none'){
			openModal();
			getElement('menu').innerHTML="<div class='menu__option' onclick='closeModal()'>Voltar ao Jogo</div><div class='menu__option' onclick='feedback()'>Configurações</div><div class='menu__option'>Opção 3</div>";
		}else{
			closeModal();	
		}
	}
    }

    closeModal();
});