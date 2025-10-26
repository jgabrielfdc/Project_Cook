class Trash{
    // constructor(){
    //     this.trashMenu()
    // }
    trashItem(item){
        item.remove();
    }

    trashMenu(event){

        if(getElement('trash_menu')){
            getElement('trash_menu').remove()
        }
            let menu=document.createElement('p');
            let trash_item=document.createElement('span');
            let close_menu=document.createElement('span');

            trash_item.innerText="Jogar Fora";
            trash_item.onclick=()=>{
                this.trashItem(event.target)
                menu.remove();
            }

            close_menu.innerText="Cancelar";
            close_menu.onclick=()=>{
                menu.remove();
            }

            menu.append(trash_item);
            menu.append(close_menu);

            let posX=event.x;
            let posY=event.y;

            menu.id='trash_menu'
            menu.className="trashMenu"
            menu.style.left=`${posX}px`;
            menu.style.top=`${posY}px`;
            
            document.getElementsByClassName('game__content')[0].prepend(menu);
        

        }
        
}

const trash=new Trash();
export default trash