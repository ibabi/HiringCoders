// tipo void  (padrao)
function principal() {
    console.log('executando')
}
principal() // o returno é undefined

// tipo never  (de loops infintos)
function funcaoQueNuncaRetorna() {
    while (true) {
        console.log('forever')
    }
}

//tipo alias
type User = {
    name: string;
    lastName: string;
    age: number;
    optional?: string;
}
const barbara: User = {
    name: 'barbara',
    lastName: 'soares',
    age: 21
}

// tipo union (funciona como o or)
type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')

// tipo intersection
type About = {
    bio: string;
    interests: string[]
}
type Profile = User & About;
const userWithProfile: Profile = {
    name: 'gabriel',
    lastName: 'ramos',
    age: 24,
    bio: 'Essa é a bio.',
    interests: ['astronomia', 'física', 'blockchain']
}