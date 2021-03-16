function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('#res');
  if (formAno.value.length <= 3 || formAno.value > ano){
      alert('[ERRO!] Verifique os dados digitados');
  }else{
      var sex = document.getElementsByName('radsex');
      var idade = ano - Number(formAno.value);
      var genero = ''
      var img = document.createElement('img');
      img.setAttribute('id', 'foto')
      if (sex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade <=15){
            //criança
            img.setAttribute('src', 'img/h_criaça.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'img/h_jovem.png')
        }else{
            //idoso
            img.setAttribute('src', 'img/h_idoso.png')
        }
      }else{
        genero = 'Mulher'
        if (idade >=0 && idade <=15){
            //criança
            img.setAttribute('src', 'img/m_criaça.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'img/m_jovem.png')
        }else{
            //idoso
            img.setAttribute('src', 'img/m_idosa.png')
        }   
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos` ;
      res.appendChild(img);
    }
}