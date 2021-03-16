function carregar(){
    var agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var imagem= document.querySelector('#foto');
    
    
    if (hora >=6 && hora <12){
        var titulo = document.querySelector('#msg');
        titulo.innerHTML = 'Bom Dia!';
        var horas = document.querySelector('#horario');
        horas.innerHTML = `${hora}:${minuto}`;
        foto.src = 'img/manha.png'
        document.body.style.background =  'rgb(202, 182, 93)';
    
    
    
    }else if(hora >=12 && hora < 18){
        var titulo = document.querySelector('#msg');
        titulo.innerHTML = 'Boa Tarde!';
        var horas = document.querySelector('#horario');
        horas.innerHTML = `${hora}:${minuto}`;
        foto.src = 'img/tarde.png';
        document.body.style.background =  'rgb(243, 170, 60)';
    
    }else{
        var titulo = document.querySelector('#msg');
        titulo.innerHTML = 'Boa Noite!';
        var horas = document.querySelector('#horario');
        horas.innerHTML = `${hora}:${minuto}`;
        imagem.src = 'img/noite.png';
        document.body.style.background =  'rgb(61, 59, 59)';
        
    }
    
}
