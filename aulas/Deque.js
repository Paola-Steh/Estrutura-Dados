/**
 * Um Deque (fila) é um tipo especial de
 * Fila onde se consegue inserir/remover
 * elementos nas duas extremidades 
 * - head -cabeça (final), índice length
 * - tail - cauda (início), índice zero
 */
class Deque { // início da classe
    // criando o método construtor
    constructor() {
        // propriedade count para controlar o tamanho
        // do Deque
        this.count = 0;
        // propriedade lowestCount para manter o 
        // controle (índice) do primeiro elemento
        this.lowestCount = 0;
        // objeto items para armazenar elementos no Deque
        this.items = {};
    }
    // adicionando um novo elemento na frente (head) do Deque
    addFront(element) {
        // primeiro cenário verifica se o deque está vazio
        if (this.isEmpty()){
            this.addBack(element);
        } else if (this.lowestCount > 0){
                // o elemento é removido d frente do deque
                this.lowestCount--;
                this.items[this.lowestCount] = element;
               } else {
                 /**
                  * se lowestCount é igual a zero e para
                  * adicionar um novo elemento na primeira 
                  * posição, devemos mover para a próxima
                  * posição e deixar o primeiro index livre 
                  * */ 
                 for (let i = this.count; i > 0; i--){
                    this.items[i] = this.items[i - 1];
                 } 
                 this.count++; //incrementando um elemento adicionado
                 this.lowestCount = 0;
                 this.items[0] = element;
               }
    }
    // adicionando um novo elemento no fim (tail) do Deque
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // remove o primeiro elemento do Deque (Fila)
    removeFront(){
        // verifica primeiro se o Deque está vazio
        if (this.isEmpty()){
            return undefined;
        }
        //armazenando o valor da frente em uma variável auxiliar
        const result = this.items[this.lowestCount];
        // removendo o elemento da frente
        delete this.items[this.lowestCount];
        // será necessário incrementar a propriedade lowestCount
        this.lowestCount++;
        // devolvendo o elemento que foi retirado do Deque
        return result;
    }
    // remove o último elemento do Deque (Fila)
    removeBack(){
        // primeiro verifica se o Deque está vazio
        if (this.isEmpty()){
            return undefined;
        }
        // identificamos o índice do último 
        // elemento adicionado no Deque (length - 1)
        this.count--;
        // guardando esse elemento em uma variável auxiliar
        const result = this.items[this.count];
        // removendo efetivamente o último (final do Deque) elemento
        delete this.items[this.count];
        // devolvendo quem foi retirado do Deque (fila)
        return result;
    }
    // devolve o primeiro elemento do Deque (Fila)
    peekFront(){
        if (this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // devolve o último elemento do Deque (Fila)
    peekBack(){
        return this.items[this.count - 1];
    }
    // para retornar o tamanho (qtde elementos) do Deque
    size(){
        return this.count - this.lowestCount;
    }
    // verifica se o Deque está vazio
    isEmpty(){
        return this.size() === 0;
    }
    // apresenta o conteúdo do Deque na console
    toString(){
        if (this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; 
                 i < this.count; 
                 i++) {
               objString = `${objString}, ${this.items[i]}`; 
        }
        return objString;
    }
} //  fim da classe
// vamos usar a classe para testar os métodos
const deque = new Deque();
// verificando inicialmente se o deque está vazio
console.log(`O Deque está vazio? ${deque.isEmpty()}`);
// adicionando um elemento no final do Deque (Fila)
deque.addBack('João');
deque.addBack('Pedro');
deque.addBack('Maria');
// verificando novamente se o Deque está vazio
console.log(`O Deque está vazio? ${deque.isEmpty()}`); 
// agora irei mostrar na console o Deque inteiro
console.log(deque.toString());
// adicionando elemento no final (fila) do Deque
deque.addBack('Camila');
console.log(deque.toString());
// adicionando elemento no início (fila) do Deque
deque.addFront('Gustavo');
console.log(deque.toString());
// removendo elemento do final (fila) do Deque
console.log(`Iremos remover ${deque.removeBack()} do final do Deque`);
console.log(deque.toString());
// removendo dois elementos do início (fila) do Deque
console.log(`Iremos remover ${deque.removeFront()} do início do Deque`);
console.log(`Iremos remover ${deque.removeFront()} do início do Deque`);
console.log(deque.toString());
// por último iremos testar o método que devolve o tamanho do Deque
console.log(`O deque(fila) possui ${deque.size()} elementos`);

deque.addBack('Aline');
deque.addFront('Letícia');
deque.addBack('Paola');
deque.addFront('AnaLuisa');
console.log(deque.toString());

// retornar o elemento da frente do Deque
console.log(`O elemento da frente do Deque é ${deque.peekFront()}`);

// retornar o elemento no final do Deque
console.log(`O elemento do final do Deque é ${deque.peekBack()}`);