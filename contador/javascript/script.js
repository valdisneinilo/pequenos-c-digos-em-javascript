function contador(){
    var formInicio = document.querySelector('#txtinicio')
    var formFim = document.querySelector('#txtfim')
    var formPasso = document.querySelector('#txtpasso')
    var res = document.querySelector('#res')

    
    if(formInicio.value.length == 0 || formFim.value.length == 0 || formPasso.value.length == 0){
        res.innerHTML = '[ERRO!] Dados inválidos, favor verificar os dados inseridos.'   
    }else if(formPasso.value <= 0){
        alert('[ERRO] Passo invalido! o passo deve ter um valor maior que 0')
        formPasso = 1
    }else{
        res.innerHTML = 'Contando: '
        if (formInicio.value <= formFim.value){
            for(var c = Number(formInicio.value); c <= Number(formFim.value);c += Number(formPasso.value)){
                res.innerHTML += `\u{1F449}${c} &nbsp;`
            }
        }else{
            for(var c = Number(formInicio.value); c >= Number(formFim.value); c -= Number(formPasso.value)){
                res.innerHTML += `\u{1F449}${c} &nbsp;`

            }
        }
        
        res.innerHTML += `&#x1F449; \u{1F6D1}`
    }
    
}