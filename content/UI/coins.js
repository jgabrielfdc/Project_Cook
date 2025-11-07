class Coins{
    constructor(){  
        this.dinheiro=0;
        this.values={'burguer':15,'hamburguer':20,'cheeseburguer':25,'refrigerante_cola':5,'refrigerante_lima':5,'refrigerante_uva':5}
        this.pontos=getElement('pontos');
    }
     

     updateCoins(item){
        let audio=document.getElementById('musica_ambiente');
        audio.src=getSound("moeda");
        audio.play()
        this.dinheiro+=this.values[item];
        this.pontos.innerText=this.dinheiro.toString();
        
     }
}

let coins=new Coins()
export default coins;