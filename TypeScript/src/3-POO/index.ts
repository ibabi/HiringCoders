class Pessoa {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const gabriel = new Pessoa('Gabriel', 25)

// herança
class Player extends Pessoa {
    game: string;
    constructor(name: string, age: number, game: string) {
        super(name, age);

        this.game = game;
    }
}

const jogador = new Player('Gabriel', 25, 'Minecraft');