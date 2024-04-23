function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   
   if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            console.log('Criança')
        }else if(idade < 21){
            console.log('Jovem')
        }else if(idade < 50){
            console.log('Adulto')
        }else{
            console.log('Idoso')
        }
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            console.log('Criança')
        }else if(idade < 21){
            console.log('Jovem')
        }else if(idade < 50){
            console.log('Adulto')
        }else{
            console.log('Idoso')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   }
}