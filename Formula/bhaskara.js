function bhaskara(){
    var d1 = document.getElementById('res1')
    var d2 = document.getElementById('res2')
    var d3 = document.getElementById('res3')

    var valoa = Number(prompt('Qual o valor de a?'))
    var valob = Number(prompt('Qual o valor de b?'))
    var valoc = Number(prompt('Qual o valor de c?'))

    
        let delta = (valob**2)
        let delta2 = (4*valoa*valoc)
        let resultado = (delta - delta2)

        d1.innerHTML = `<p>A equação atual é ${valoa}x<sup>2</sup> + ${valob}x + ${valoc} = 0</p>`

        d2.innerHTML = `<p>O cálculo realizado será &#x1F6C6; = ${valob}<sup>2</sup> - 4 . ${valoa} . ${valoc}</p>`

        d3.innerHTML = `O valor calculado foi &#x1F6C6; = ${resultado}`
    

}

function verificar(){
    var res = document.getElementById('res')
    var ano = Number(prompt('Qual o ano que você quer verificar?'))
    var vdd = ' É BISSEXTO'
    var fls = ' NÃO É BISSEXTO' 


    if(ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
        
        res.innerHTML = 'O ano de ' + ano + vdd
    }else{
        res.innerHTML = 'O ano de ' + ano + fls
    }
}
