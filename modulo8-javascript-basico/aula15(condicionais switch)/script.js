var nota1 = 8.0;
var nota2 = 9.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
    conceito = "Ótimo";
}
else if (media >= 6.5) {
    conceito = "Bom";
}else {
    conceito = "Regular";
}
conceito = "mais ou menos";

console.log(media);
console.log(conceito);

switch (conceito) {
    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno!");
        break;
    case "Bom":
        console.log("Parabéns, você é um bom aluno!");
        break;
    case "Regular":
        console.log("Você precisa estudar mais!");
        break;
    default:
        console.log("Hover um error!");
        break;
}