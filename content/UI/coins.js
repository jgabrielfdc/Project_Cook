class Coins{
    constructor(pontos=0){  
        this.dinheiro=0;
        this.values={'burguer':15,'hamburguer':20,'cheeseburguer':25,'refrigerante_cola':5,'refrigerante_lima':5,'refrigerante_uva':5}
        this.pontos=pontos;
    }
     

     updateCoins(item){
        this.dinheiro+=this.values[item];
        console.log(this.pontos);
        this.pontos.innerText=this.dinheiro.toString();
        
     }
}

export default Coins