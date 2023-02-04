function mostrarNome() {
    return 'Bruna' //sempre retornará esse valor
}
console.log(mostrarNome())
//retorna o valor de vez

let teste = (typeof mostrarNome)
let y

if(teste === 'function') {
    y = true
} 
else {
    y = false
}

if(y === true) {
    console.log(mostrarNome())
}
//Checa se mostrarNome() é uma função ou não, se ss mstra o valor q ela retorna

//Outra forma de fazer td aquilo é
let nome

function test1() {
    return 'Felipe'
}

if(test1 instanceof Function) {
    nome = test1()
}
alert(nome)
//Isso pd ser usado para muitas outras coisas como arrays, etc