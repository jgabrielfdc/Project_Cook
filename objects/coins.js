class Coins{
    constructor(){  
        this.dinheiro=0;
        this.values={'burguer':15,'hamburguer':20,'cheeseburguer':25,'refrigerante_cola':5,'refrigerante_lima':5,'refrigerante_uva':5}
    }
     

     updateCoins(item){
        this.dinheiro+=this.values[item];
        getElement('pontos').innerText=this.dinheiro.toString;
        console.log('Olá')
     }
}