function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        
        img.src = 'Manhã.jpg'
        document.body.style.background = '#6669ff'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'Tarde.jpg'
        document.body.style.background = '#ffe680'
    }else{
        //boa noite
        img.src = 'Noite.jpg'
        document.body.style.background = '#3c4291'
    }


}


