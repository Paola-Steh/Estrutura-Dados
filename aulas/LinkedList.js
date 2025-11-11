// Vamos criar uma nova classe para implementar a lista ligada
function LinkedList() {  //início da classe
    // classe auxiliar que representará o elemento
    // da cabeça (head)
    let Node = function(element) {
        this.element = element; // valor da lista
        this.next = null; //ponteiro para o próximo elemento
    }
    let length = 0;    //contador de elementos inseridos
    var head   = null; //localização do último (frente) elemento da lista
    
    //esse método insere um novo elemento no final da lista.
    this.append = function(element) {
        // cria um novo Node passando element como argumento
        const node = new Node(element);
        let current = null;
        if (head === null) { // 1º cenário quando a lista estiver vazia
            head = node;
        } else { // 2º cenário quando a lista não estiver vazia
            current = head;
            while(current.next){
                //obtém o último item
                current = current.next;
            }
            // e atribui o novo elemento a next
            // para criar a ligação
            current.next = node;
       } // incrementando o tamanho da lista
       length++;
    };
    //esse método insere um novo elemento em uma posição específica
    this.insert = function(position, element){
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous;  
            if (position === 0){ // adiciona na primeira posição
                node.next = current;
                head = node;
            } else {
                previous = this.getElementAt(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
            length++; // atualiza o tamanho da lista
            return true;
        } else {
            return false;
        } 
    };

    //esse método devolve o elemento que está em uma posição
    //específica. Se o elemento não estiver na lista, undefined
    //será devolvido
    this.getElementAt = function(position){
        if (position >= 0 && position <= this.size()) {
            let node = head;
            for (let i = 0; i < position && node != null; i++){
                node = node.next;
            }
            return node; // devolve o elemento encontrado na lista
        } 
        return undefined; // caso não encontre o elemento
    }

    //esse método remove um item de uma posição específica da lista
    this.removeAt = function(position){
        // verifica valores fora do intervalo
        if (position > -1 && position < length) {
            let current = head,
            previous;
            // remove o primeiro item
            if (position === 0) {
                head = current.next;
            } else {
                for (var i = 0; i < position; i++){
                    previous = current; // guardando o elemento anterior
                    // elemento que queremos remover é o próximo
                    current = current.next;
                }
                // refaz a ligação de previous com o next de current
                // pula esse elemento para removê-lo
                previous.next = current.next;
            }
            length--; // atualiza a contagem depois de remover um elemento
            return current.element;
        } else {
            return null;
        }     
    };

    //esse método devolve o índice(posição) do elemento.
    //Se o elemento não estiver devolverá -1
    this.indexOf = function(element){
        let current = head; // guarda o último elemento 
        let index = 0; // buscar inicialmente pelo primeiro endereço.
        while(current){ // percorrendo enquanto existe elemento na lista
            if (element === current.element) {
                return index;  // retorna a posição quando encontrar
            }
            index++; // incrementando mais uma posição
            current = current.next; // guardando sempre o próximo da lista
        }
        return -1; // caso não encontre, devolve -1 pra tratamento erro
    }
    //este método remove um elemento da lista
    this.remove = function(element){
      let index = this.indexOf(element); // encontrando o endereço do elemento
      this.removeAt(index);  // reproveito a remoção por endereço
    }
    //esse método verifica (true/false) se a lista está vazia.
    this.isEmpty = function(){
        return length === 0;
    }
     //esse método devolve o número de elementos da lista ligada.
    this.size = function(){
       return length;
    }
    //esse método devolve o elemento que está no início (head)
    //da lista ligada
    this.getHead = function(){
        return head;
    }
    //esse método devolve uma representação em texto(string)
    //de todo conteúdo da lista ligada
    this.toString = function(){
        let current = head,
            string = '';
        // percorrendo cada elemento da lista encadeada
        // e concatenando em uma string
        while (current){
            string += current.element + (current.next ? ' -> ':'');
            current = current.next;        
        }
        // devolvendo a string com todos os elementos 
        // da lista concatenados com uma setinha
        return string;
    }
} // fim da classe LinkedList

// agora vamos testar os métodos da nossa 
// lista simplesmente encadeada (ligada ou laceada) 
// classe (function) LinkedList

// primeiro instanciando um objeto desta classe
let listaEncadeada = new LinkedList();

// inserindo um elemento
listaEncadeada.append('João');
listaEncadeada.append('Maria');
listaEncadeada.append('José');
// imprimindo a lista vazia
console.log(listaEncadeada.toString());
listaEncadeada.append('Gustavo');
listaEncadeada.append('Aline');
listaEncadeada.append('Pedro');
console.log(listaEncadeada.toString());
// inserindo um elemento em uma posição específica
listaEncadeada.insert(4, 'Regiano');
// mostrar novamente pra testar se Regiano ficará entre Gustavo e Aline
console.log('Inserimos Regiano entre Gustavo e Aline: '+ listaEncadeada.toString());
// agora iremos remover um elemento específico
listaEncadeada.remove('Maria');
console.log('Veja a lista após retirar Maria: '+ listaEncadeada.toString());
// inserindo um elemento na primeira posição
listaEncadeada.insert(0, 'Paola');
// agora iremos remover um elemento de uma posição específica
listaEncadeada.removeAt(2); // começando de zero, será o terceiro elemento
console.log('Veja a lista após retirar José da terceira posição: '
    + listaEncadeada.toString());
// qual é o tamanho da lista
console.log(`A lista possui: ${listaEncadeada.size()} elementos`);  
// removendo alguns elementos
listaEncadeada.remove('Pedro');  
listaEncadeada.remove('Regiano');
listaEncadeada.remove('Aline');
//console.log(`Removendo Pedro, Regiano e Aline \nAgora a lista contém: ${listEncadeada.size()} elementos`);  
console.log('Removendo Pedro, Regiano e Aline');
console.log(`Agora a lista contém: ${listaEncadeada.size()} elementos`);
// mostrando o primeiro elemento (head)
console.log(`O primeiro elemento (head): ${listaEncadeada.getHead().element}`);
// buscando o endereço de um elemento
console.log(`Na lista Gustavo está na ${listaEncadeada.indexOf('Gustavo')}a. posição.`);