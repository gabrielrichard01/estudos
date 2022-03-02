// var a = {
//     nome: "Pedro",
//     sobrenome: "João"
// }

// console.log(a);

function obj(n, s){
    this.nome = n;
    this.sobrenome = s;
}

var a = new obj("Pedro", "João");
console.log(a);