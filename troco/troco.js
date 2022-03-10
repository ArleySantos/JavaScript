function calcular(){
    var produto = window.prompt('Qual produto você quer?')
    var valor = window.prompt('Quanto custa ' + produto + ' que você escolheu?')
    var valor2 = window.prompt('Qual foi o valor que você deu para pagar ' + produto)
    var troco = Number(valor.value) & Number(valor2.value)

    if(produto > valor){
        var troco = valor - valor2
    }else if(produto < valor){
        var troco = valor2 - valor
    }

    window.alert('Você comprou ' + produto + ' que custou R$ ' + valor + '. '
    + 'Deu R$' + valor2 + ' em dinheiro e vai receber R$' +troco+ ' de troco. ' + 'Volte sempre!')
}

    var bt = document.getElementById('botao')
    var res = document.getElementById('res')
    var dados = document.getElementById('dados')
    var dado2 = document.getElementById('dado2')
    bt.addEventListener('click', clicar)

    function clicar(){
    var M = Number.parseInt(prompt('Digite uma distância em metros (m)'))
    M.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var Km = M/1000
    var Hm = M/100
    var Dam = M/10
    var dm = M*10
    var cm = M*100
    var mm = M*1000

    res.innerHTML = `<h2>A distância de ${M} mestros, corresponde a...</h2>`

    dados.innerHTML = `<p>${Km} quilômetros (km)</p>
    <p>${Hm} hectômetros (hm)</p>
    <p>${Dam} decâmetros (dam)</p>
    <p>${dm} decímetros (dm)</p>
    <p>${cm} centímetors (cm)</p>
    <p>${mm} milímetros (mm)</p>` 

    

}