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
    var d1 = document.getElementById('d1')
    var d2 = document.getElementById('d2')
    var d3 = document.getElementById('d3')
    bt.addEventListener('click', clicar)

    function clicar(){
    var M = Number.parseFloat(prompt('Digite uma distância em metros (m)'))
    var Km = (M/1000).toFixed(3)
    var Hm = (M/100).toFixed(3)
    var Dam = (M/10)
    var dm = (M*10)
    var cm = (M*100)
    var mm = (M*1000)


    res.innerHTML = '<h2>A distância de' + M + ' mestros, corresponde a...</h2>'

    dados.innerHTML = `<p>${Km} quilômetros (km)</p>
    <p>${Hm} hectômetros (hm)</p>
    <p>${Dam} decâmetros (dam)</p>`
    d1.innerHTML = new Intl.NumberFormat( {style: 'currency', currency: 'BRL'}).format(dm) + ' decímetros (dm)'
    d2.innerHTML = new Intl.NumberFormat( {style: 'currency', currency: 'BRL'}).format(cm) + ' centímetors (cm)'
    d3.innerHTML = new Intl.NumberFormat( {style: 'currency', currency: 'BRL'}).format(mm) + ' milímetros (mm)'

    

}

    function converter(){
        var conv = Number(prompt('Digite uma temperatura em °C (Celsius)'))
        var resu = document.getElementById('resu')
        var grau = document.getElementById('graus')
        var grau2 = document.getElementById('graus2')

        resu.innerHTML = `A temperatura de ${conv}°C, corresponde a...`

        var k = (conv + 273.15)
        var f = (conv * 1.8 + 32)

        grau.innerText = k.toFixed(2).replace('.', ',') + '°K (Kelvin) '
        grau2.innerText = f.toFixed(2).replace('.', ',') + '°F (Fahrenheit)'


    }