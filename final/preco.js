function verificar(){
    var preco = Number(prompt('Qual era o preço anterior do produto?'))
    var preco2 = Number(prompt('Qual é o preço atual do produto?'))
    var res = document.getElementById('res')
    var d1 = document.getElementById('d1')
    var d2 = document.getElementById('d2')
    var d3 = document.getElementById('d3')
    var d4 = document.getElementById('d4')

        var ajuste = (preco2 - preco)
        var porcentagem = (ajuste*100)
        var aume = (porcentagem / preco)

    res.innerHTML = '<p><strong>Analisando os valores informados</strong></p>'
    d1.innerHTML = 'O produto custava ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) + ' e agora custa ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco2)

    if(preco < preco2){

        d2.innerHTML = 'Hoje o produto está mais caro.'
        d3.innerHTML = 'O preço subiu ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(ajuste) + ' em relação ao preço anterior.'
        d4.innerHTML = 'Uma variação de ' + aume + '%.'

    }else{
        var ajuste = (preco - preco2)
        var porcentagem = (ajuste*100)
        var aume = (porcentagem / preco2)
        d2.innerHTML = 'Hoje o produto está mais barato.'
        d3.innerHTML = 'O preço baixou R$ ' + new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(ajuste) + ' em relação ao preço anterior.'
        d4.innerHTML = 'Uma variação de ' + (aume).toFixed(2) + '%.'
    }
}