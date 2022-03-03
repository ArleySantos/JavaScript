function desafio(){
    var nome = window.prompt('Qual é seu nome?')
    var idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`)
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}
function conta(){
    var numero = window.prompt('Digite um numero inteiro qualquer')
    var p = 1
    window.alert(`Antes de ${numero}, temos o número ${numero - 1}
    Depois do número ${numero} ` + 'temos o número ' + (parseInt(numero) + parseInt(1))
    )
}