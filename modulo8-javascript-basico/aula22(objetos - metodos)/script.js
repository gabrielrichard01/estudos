function calcmedia(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Maria",
    notas: [7, 8],

    media: calcmedia
}

var aluno1 = {
    nome: "João",
    notas: [5, 6],

    media: calcmedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());