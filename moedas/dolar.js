function converter(){
    var dola = Number(prompt('Antes de mais nada. Quanto está a cotação do dolar agora?'))
    var valor = Number(prompt('Quantos R$ você tem na carteira?'))
    var res = document.getElementById('res')

    var resu = (valor/dola)

    res.innerHTML = `<p>Você tem em dolar ${resu} US$`
}