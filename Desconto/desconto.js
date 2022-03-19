function desconto(){
    let res = document.getElementById('res')

    let d1 = document.getElementById('div1')
    let d2 = document.getElementById('div2')
    let d3 = document.getElementById('div3')

    let produto = prompt('Qual é o produto que você está comprando?')
    let preço = prompt(`Qual é o preço do ${produto}`)
    let desc = (10*preço)
    let desc2 = (desc/100)
    let sub = (preço - desc2).toFixed(2)
    

    res.innerHTML = 'Calculando desconto de 10% para ' + produto

    d1.innerHTML = 'O preçõ original era R$ ' + preço

    d2.innerHTML = 'Você acaba de ganhar R$ ' + desc2 + ' de desconto (-10%).'

    d3.innerHTML = 'No fim, você vai pagar R$ ' + sub + ' no produto ' + produto
}

function reajuste(){
    let resu = document.getElementById('res')

    let d4 = document.getElementById('div4')
    let d5 = document.getElementById('div5')
    let d6 = document.getElementById('div6')

    let funcionario = prompt('Qual é o nome do funcionário?')
    let salario = Number(prompt('Qual é o salário de ' + funcionario + '?'))
    let ajuste = Number(prompt('O salário de ' + funcionario + ' vai ser reajustado em qual porcentagem?'))


    let aume = (ajuste*salario)
    let aume2 = (aume/100)

    let salario2 = (salario + aume2)

    

    resu.innerHTML = funcionario + ' recebeu um aumento salárial! ' 

    d4.innerHTML = 'O salário atual era ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salario)

    d5.innerHTML = 'Com um aumento de ' + ajuste + '%, o salário vai aumentar R$' + aume2 + ' no proximo mês.'

    d6.innerHTML = 'E apartir daí, ' + funcionario + ' vai passar a ganhar ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(salario2)
}