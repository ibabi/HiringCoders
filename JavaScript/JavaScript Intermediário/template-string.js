let meuNome = 'Bárbara';
let meuSobrenome = 'Soares';
let minhaProfissao = 'Software Engineer';

// Usando concatenacao
console.log(
  'Olá, eu sou' +
    meuNome +
    ' ' +
    meuSobrenome +
    ' e atualmente minha profissão é: ' +
    minhaProfissao
);

// Usando Template String
console.log(
  `Olá, eu sou ${meuNome} ${meuSobrenome} e atualmente minha profissão é: ${minhaProfissao}`
);

console.log(`O resultado de 1 + 1 é: ${1 + 1}`);
console.log(`O resultado de 1 + 1 é: ${{ chave: 'valor' }}`);