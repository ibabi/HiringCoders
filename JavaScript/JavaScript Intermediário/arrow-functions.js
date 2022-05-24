
function soma(x, y) {
  return x + y;
}

// Modelo ES5
const multiplicacao = function(x, y) {
  return x * y;
};

let mult = multiplicacao(2, 5);
console.log(mult);

// Modelo ES6 - arrow functions
const dividir = (x, y) => {
  return x / y;
};

const mensagem = () => {
  console.log('Hello Gama!');
};

const objetos = () => ({ nome: 'Bárbara', sobrenome: 'Soares' });

const divisao = (a, b) => a / b;
