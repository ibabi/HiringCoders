
// String
let nome: string;
nome = 'bárbara';

// number
let idade: number = 21;

// boolean 
let estaAtivo: boolean = true;

// array
let alunos: string[] = [
    'Bárbara',
    'Caio',
    'Eduardo'
]

// tupla
let professores: [string, string, string] = [
    'Márcio',
    'Roberto',
    'Paulo'
]
let nomeIdade: [string, number] = [
    "Bárbara", 21
]

// enum
enum Permissoes {
    admin,
    editor,
    comum
}
const usuario = {
    nivel: Permissoes.comum
}
console.log(usuario) // retorna nivel: 2

enum Permissoes2 {
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM'

}
const usuario2 = {
    nivel: Permissoes2.admin
}
console.log(usuario2) // retorna nivel: ADMIN

// tipo any (evitar o tipo any)
let valorNumero: any;

valorNumero = 25;
valorNumero = '25';

// tipo unknown
let informacoes: unknown;

// null e undefined
let variavelNula: null;
let variavelIndefinida = undefined;

// tipo object
let pessoa: object = {
    name: 'barbara',
    lastName: 'soares'
}