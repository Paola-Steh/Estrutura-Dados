class Aluno {
    constructor(nome, nota, ativo) {
        this.nome = nome;
        this.nota = nota;
        this.ativo = ativo;
    }
}

class ListaAlunos {
    constructor() {
        this.alunos = [];
        this.limite = 40;
    }
    adicionar(aluno, posicao) {
        if (this.alunos.length >= this.limite) {
            console.log("Limite máximo de alunos atingido.");
            return;
        }

        if (posicao < 1 || posicao > this.alunos.length + 1) {
            console.log("Posição inválida!");
            return;
        }

        this.alunos.splice(posicao - 1, 0, aluno);
        console.log(`${aluno.nome} adicionado na posição ${posicao}.`);
    }
    remover(posicao) {
        if (posicao < 1 || posicao > this.alunos.length) {
            console.log("Posição inválida!");
            return;
        }

        let removido = this.alunos.splice(posicao - 1, 1)[0];
        console.log(`${removido.nome} removido da posição ${posicao}.`);
    }
    ordenarPorNota() {
        this.alunos.sort((a, b) => b.nota - a.nota);
        console.log("Lista ordenada por nota decrescente.");
    }
    mostrarListaCompleta() {
        console.log("\n---- Aluno Nota Status ----");
        this.alunos.forEach((aluno, index) => {
            console.log(`${index + 1}. ${aluno.nome} ${aluno.nota} ${aluno.ativo ? "A" : "I"}`);
        });
    }
    mostrarAtivos() {
        console.log("\n---- Alunos Ativos ----");
        this.alunos.forEach((aluno) => {
            if (aluno.ativo) {
                console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
            }
        });
    }
}

let lista = new ListaAlunos();

lista.adicionar(new Aluno("Pedro", 8.9, true), 1);
lista.adicionar(new Aluno("Ana", 8.7, true), 2);
lista.adicionar(new Aluno("Maria", 9.3, true), 3);


lista.mostrarListaCompleta();

lista.remover(1);

lista.mostrarListaCompleta();

lista.ordenarPorNota();

lista.mostrarListaCompleta();

lista.adicionar(new Aluno("Paula", 9.1, true), 1);

lista.mostrarListaCompleta();

lista.adicionar(new Aluno("João", 7.5, true), 5);

lista.mostrarListaCompleta();

lista.mostrarAtivos();

