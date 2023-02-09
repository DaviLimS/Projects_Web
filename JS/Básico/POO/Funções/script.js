//Declaração
nome('Declaração') //a chamada nn faz diferença
function nome(user) {
    console.log(user);
}

//expressão ***
const name = function(user) {
    console.log(user);
}

const name2 = (user) => {
    console.log(user);
}

name('Expressão');
name2('Arrow Function expressão');

const name3 = function(user) {
    return arguments[0]; //refere-se aso argumentos dentro do parênteses da função, em especial os que tem seu valor declarado
}
let a = name3('argumento 0 é igual a user');
console.log(a);