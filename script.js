function verificar(){
    var data = new Date() //pega a data atual
    var ano = data.getFullYear()
    var fano = document.getElementById('ano') 
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-masculino.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //criança
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-masculino.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-homem.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //adulto
            }else{
                img.setAttribute('src', 'idoso-homem.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //idoso
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-feminino.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //criança
            }else if(idade < 21){
                img.setAttribute('src', 'jovem-feminino.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'mulherr.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //adulto
            }else{
                img.setAttribute('src', 'idoso-mulher.jpg')
                img.style.marginTop = '23px'
                img.style.borderRadius = '50%'
                //idoso
            }
        }
        res.style.textAlign = 'center' //usando stilo direto do javascript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}