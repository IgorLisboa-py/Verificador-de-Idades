function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade == 0){
                //bebê
                img.setAttribute('src' , 'baby.jpg')
            } else if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'homemcrianca.jpg')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src' , 'homemadolescente.jpg')
            } else if (idade >= 21 && idade < 90){
                //Adulto
                img.setAttribute('src' , 'homemadulto.jpg')
            } else if (idade >= 90) {
                //Idoso
                img.setAttribute('src' , 'homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade == 0){
                //bebê
                img.setAttribute('src' , 'baby.jpg')
            } else if (idade > 0 && idade <= 10){
                //Criança
                img.setAttribute('src' , 'mulhercrianca.jpg')
            } else if (idade > 10 && idade <= 21){
                //Jovem
                img.setAttribute('src' , 'mulheradolescente.jpg')
            } else if (idade > 21 && idade < 90){
                //Adulto
                img.setAttribute('src' , 'mulheradulta.jpg')
            } else if (idade >= 90) {
                //Idoso
                img.setAttribute('src' , 'mulheridosa.jpg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
     }
}