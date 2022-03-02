function aluno(nome, n1, n2){
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;
    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno("João", 7, 8);
var a = new aluno("Maria", 6, 7);

console.log(a);