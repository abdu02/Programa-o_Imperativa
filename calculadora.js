// calculador Nível 1
function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

//Calculadora Nível 2
console.log("TESTE DE OPERAÇÕES");
console.log(adicionar(1, 1));
console.log(subtrair(10, 4));
console.log(multiplicar(2, 2));
console.log(dividir(10, 2));
console.log(dividir(0, 0));

//Calculadora Nível 3
function QuadradoDoNumero(a) {
    return Math.pow(a, a);
}

console.log(QuadradoDoNumero(2));

function MediaDeTresNumeros(a, b, c) {
    return adicionar(adicionar(a, b), c) / 3;
}

console.log(MediaDeTresNumeros(10, 10, 10));

function CalcularPorcentagem(a, b) {
    return multiplicar(a, dividir(b, 100));
}

console.log(CalcularPorcentagem(300, 15));

function GeradorDePorcentagem(a, b) {
    return dividir(a, dividir(b, 100));
}

console.log(GeradorDePorcentagem(60, 300) + "%");