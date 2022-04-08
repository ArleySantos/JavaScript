function media(){

    var d1 = document.getElementById('d1')
    var d2 = document.getElementById('d2')
    var d3 = document.getElementById('d3')

    var aluno = prompt('Qual é o nome do aluno?')
    var nota1 = Number(prompt('Primeira nota de ' + aluno + ':'))
    var nota2 = Number(prompt('Segunda  nota de ' + aluno + ':'))

    var nota = (nota1 + nota2)
    var M = (nota / 2)


    if(M < 3){
        d1.innerHTML = `<h1>Analisando a Situação de ${aluno}</h1>`
        d2.innerHTML = 'Com as notas ' + nota1 + ' e ' + nota2 + ' a média é ' + M
        d3.innerHTML = 'Com média abaixo de 3,0 o aluno está <strong style="background: red; color: white;">REPROVADO</strong>'
    }

    else if(M > 3 && M < 6){
        d1.innerHTML = `<h1>Analisando a Situação de ${aluno}</h1>`
        d2.innerHTML = 'Com as notas ' + nota1 + ' e ' + nota2 + ' a média é ' + M
        d3.innerHTML = 'Com média entre 3,0 e 6,0 o aluno está em <strong style="background: #8a692c; color: white;">recuperação</strong>'
    }


    else if(M > 6){
        d1.innerHTML = `<h1>Analisando a Situação de ${aluno}</h1>`
        d2.innerHTML = 'Com as notas ' + nota1 + ' e ' + nota2 + ' a média é ' + M
        d3.innerHTML = 'Com média acima de 6,0 o aluno está <strong style="background: green; color: white;">APROVADO</strong>'
    }
}