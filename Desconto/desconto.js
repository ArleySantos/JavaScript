function desconto(){
    var res = document.getElementById('res')

    var d1 = document.getElementById('div1')
    var d2 = document.getElementById('div2')
    var d3 = document.getElementById('div3')

    var produto = prompt('Qual é o produto que você está comprando?')
    var preço = prompt(`Qual é o preço do ${produto}`)
    var desc = (10*preço)
    var desc2 = (desc/100)
    var sub = (preço - desc2)
    var sub2 = sub.toFixed(2)

    res.innerHTML = 'Calculando desconto de 10% para ' + produto

    d1.innerHTML = 'O preçõ original era R$ ' + preço

    d2.innerHTML = 'Você acaba de ganhar R$ ' + desc2 + ' de desconto (-10%).'

    d3.innerHTML = 'No fim, você vai pagar R$ ' + sub2 + ' no produto ' + produto
}