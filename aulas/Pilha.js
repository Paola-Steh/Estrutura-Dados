/**
 *  Vamos codificar o esqueleto de métodos
 *  para uma estrutura de dados Pilha simples
 **/
class Pilha {  //início da classe Pilha
    /** método construtor que será útil
     *  ao instanciar um objeto do tipo
     * desta classe Pilha
     **/
    constructor() {
        this.items = [];
    }

    // método para empilhar elementos
    empilhar(elemento){ 
        // posso empilhar usando o método javaScript push
        // this.items.push(elemento);
        // ou então empilhar usando o último endereço vazio
        this.items[this.items.length] = elemento;
    }

    // devolve o elemento do topo da pilha
    devolveElementoTopoPilha(){
        return this.items[this.items.length -1];
    }

    // remover elemento (item) do topo da pilha
    removeElementoTopoPilha() { 
        return this.items.pop();
    }

    // informa se a pilha está vazia
    pilhaEstaVazia() {
        return this.items.length === 0;
    }   
    // limpar a pilha
    limparPilha() {
        this.items = [];
    }
    // devolve o tamanho (qtde elementos) da pilha
    tamanhoPilha() {
        return this.items.length;
    }
    // imprimir todos elementos pilha
    imprimir() {
        console.log(this.items.toString());
    }

} // fim da classe Pilha
 
/**
 * agora vamos testar o funcionamento dos métodos
 * da classe Pilha, instanciando (criando) um objeto
 * desta classe
 */
 const pilha = new Pilha();

// empilhando elementos
pilha.empilhar('Gustavo');
pilha.empilhar('Regiano');
pilha.empilhar('Fábio');
pilha.empilhar('Airton');
pilha.empilhar('Pedro Marcato');

// primeiramente vamos verificar se a pilha está vazia
console.log('A pilha está vazia? ', pilha.pilhaEstaVazia());

// verificando se foi inserido o elemento na pilha
pilha.imprimir();

// verificando o tamanho da pilha
console.log("A pilha contém ", pilha.tamanhoPilha(),
            " elementos.");

// verificando o elemento que está no topo da pilha
console.log("Quem está no topo da pilha é:",
             pilha.devolveElementoTopoPilha()); 

         
// desempilhando (removendo o elemento do topo da pilha)
console.log("Remover o elemento:", 
        pilha.removeElementoTopoPilha(),"da pilha");

// imprimindo novamente a pilha, sem o último elemento
pilha.imprimir();   

console.log("Remover o elemento:", 
            pilha.removeElementoTopoPilha(),"da pilha");
console.log("A pilha agora, contem:",
             pilha.tamanhoPilha(),"elementos");

// mostrando a pilha depois de remover um elemento
pilha.imprimir(); 

console.log("Remover o elemento:", 
    pilha.removeElementoTopoPilha(),"da pilha");

// mostrando a pilha depois de remover mais outro elemento
pilha.imprimir(); 

console.log("Remover o elemento:", 
    pilha.removeElementoTopoPilha(),"da pilha");

// mostrando a pilha depois de remover mais outro elemento
pilha.imprimir(); 


// agora vamos esvaziar a pilha
pilha.limparPilha();
console.log("Agora irei limpar a pilha e ela conterá:",
    pilha.tamanhoPilha(),"elementos");
